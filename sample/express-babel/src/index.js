import {createConnection} from "typeorm"
import {Routes} from "./utils/decorator"
import {Config} from "./config"
import {deleteOne} from "./utils/tool"
import express,{Request,Response,NextFunction} from "express"
import fs from "fs"
import path from "path";
import bodyParser from "body-parser"
import session from "express-session"
import schedule from "node-schedule"
import {Controller} from "./controller"
// import {User} from "./entity/User"

const N=require('nedb-session-store')(session)
createConnection().then(connection => {
  console.time("time");global.ONCE=true;
  fs.readdirSync(__dirname+"/controller").forEach((i)=>{require(__dirname+"/controller/"+i)});
  const app = express().use(require('connect-flash')()).use(bodyParser.json({limit:Config.jsonLimit}));
  schedule.scheduleJob('*/25 * * * *',()=>deleteOne(Config.dbLog))
  app.use(session({
    name:Config.session.name,secret:Config.session.secret,cookie:Config.session.cookie,//期限毫秒,25min,path:'/',secure:true
    resave:true,rolling:true,saveUninitialized:false,store:new N({filename:Config.dbLog})
    //url:'mongodb://localhost/blog',store:new MongoStore({host:'localhost',port:27017,db:'test'}),proxy:true// 'path_to_nedb_persistence_file.db'
  }));
  app.all((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Credentials',false);
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.locals.session=req.session;res.locals.err=req.flash('err');next();
  }).use(bodyParser.urlencoded({ extended:true,limit:Config.jsonLimit }));
  Routes.forEach(r=>app[r.m](...r.w?[r.r,r.w]:[r.r],(req,res,next)=>{
    const c = r.a(req, res, next);
    if (c instanceof Promise)
      c.then(c=>c!==undefined&&c!==null?res.send(c):undefined)
    else if (c!==undefined&&c!==null)
      res.json(c);
  }));
  app.use(express.static(path.join("views")));//app.set("view cache",true);
  app.set('view engine','html');
  app.engine('html',require('ejs-mate'));
  // const u = new User("testman");
  // connection.getRepository(User).save(u).then(u => {
  //   console.log("user has been saved: ", u);
  // });
  app.listen(Config.port,"0.0.0.0",()=>{console.log(`ExServer http://localhost:${Config.port} to see`);});
  console.timeEnd("time");
}).catch(e => console.log("Error: ", e));