import {createConnection} from "typeorm";
import fastify,{FastifyRequest,FastifyReply} from "fastify";
import fs from "fs"
import {Routes} from "./utils/decorator"
import {Controller} from "./controller"
import {sqlCheck} from "./utils/tool"
// import {User} from "./entity/User"

createConnection().then(async conn => {
  //`logger:false`disable can make it faster unless you use it in devDependencies
  const app = fastify({logger: false}).register(require('point-of-view'), {
    engine: {ejs: require('ejs')},templates: './views'
  }).addContentTypeParser('application/x-www-form-urlencoded', { parseAs: 'string' }, function (req, body, done) {
    try {
      done(null, JSON.parse("{\"" + body.replace(/=/g, "\":\"").replace(/&/g, "\",\"") + "\"}"))
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  })//use ejs template engine,but in HTML format,it is convenient to use eslint code prompt in HTML
  app.log.info("loading...")
  // await app.register(require('middie'))
  // app.use(require('cors')())
  let f=[],vv={},h=true;
  await fs.readdirSync(__dirname+"/controller").forEach(i=>{require(__dirname+"/controller/"+i);f.push(i)})
  await fs.readdirSync(__dirname+"/entity").forEach(i=>{
    let v={},en=require(__dirname+"/entity/"+i);
    let res=conn.getRepository(en[Object.keys(en)[0]]).metadata.ownColumns;
    res.forEach(r=>{
      Object.defineProperty(v,r.propertyName, {
        enumerable: true,configurable: false,
        value: {type:sqlCheck(r.type)}
      });
    });vv[i]=v;v=null;//reclaiming memory
  })
  for (let i in f){
    Routes.forEach(r=>{if(r.c+".js"===f[i]){
      if(r.p.result===undefined)r.p=vv[r.c.replace(/(\w*)[A-Z]\w*/,"$1")+".js"]
      else r.p.result={type:"object",properties:vv[r.c.replace(/(\w*)[A-Z]\w*/,"$1")+".js"]}
    }})
    if(i==f.length-1)h=false;
  }//console.log(Routes)
  Routes.forEach(r=>{
    let opts={ schema: {response: {200: {type: r.s,properties:r.p}}}}
    r.w ? opts.preHandler = r.w : undefined;
    app[r.m](r.r, opts, (req:FastifyRequest,rep:FastifyReply) => {
      return r.a(req,rep)/*Be sure to test req or rep below this line,
      and then you'll be prompted with code,(for performance reasons)*/
       
    })
  })
  // const u = new User("testman");
  // conn.getRepository(User).save(u).then(u => {
  //   console.log("user has been saved: ", u);
  // });
  app.listen(3000,err => { if(err)throw err;else console.log(`FastifyServer http://localhost:3000 to see`) })
  f=null;vv=null;//reclaiming memory
}).catch(error => console.error("TypeORM connection error: ", error));
