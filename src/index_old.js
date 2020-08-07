import {createConnection} from "typeorm";
import fastify,{FastifyRequest,FastifyReply} from "fastify";
import fs from "fs"
import {Routes} from "./utils/decorator"
import {Controller} from "./controller"
import {sqlCheck} from "./utils/tool"
//Very unfortunate old version only support mysql query
createConnection().then(async conn => {
  const app = fastify({logger: true}).register(require('point-of-view'), {
    engine: {ejs: require('ejs')},templates: './views'
  })//use ejs template engine,but in HTML format,it is convenient to use eslint code prompt in HTML
  app.log.info("loading...")
  // await app.register(require('middie'))
  // app.use(require('cors')())
  let f=[],h=true,
  dataBase=await fs.readFileSync('./ormconfig.json',e=>{if(e){return console.error(e);}})
  dataBase=JSON.parse(dataBase.toString()).database;
  fs.readdirSync(__dirname+"/controller").forEach(i=>{require(__dirname+"/controller/"+i);f.push(i)})
  for (let i in f) {let v={}
    conn.query(`SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
    WHERE table_name = '${f[i].replace(/(\w*)[A-Z]\w*\.js/,"$1").toLocaleLowerCase()}'
    AND table_schema = '${dataBase}'`,(err,res:Array<String>)=>{
      res.forEach(r=>{
        Object.defineProperty(v,r.COLUMN_NAME, {
          enumerable: true,configurable: false,
          value: {type:sqlCheck(r.DATA_TYPE)}
        });
      })
      Routes.forEach(r=>{if(r.c.name+".js"===f[i])r.p=v})
      if(i==f.length-1)h=false;v=null;
    })
  }
  return await function fff(){
    setTimeout(()=>{
      if(h)return fff();else {
        // console.log(Routes);
        Routes.forEach(r=>{
          let opts={
            schema: {response: {200: {type: r.s,properties:r.p}}}
          }
          r.w?opts.preHandler=r.w:undefined;
          app[r.m](r.r, opts, (req:FastifyRequest,rep:FastifyReply)=>{
            const c = (new r.c)[r.a](req,rep);
            if (c instanceof Promise)
              c.then(c=>c!==undefined&&c!==null?rep.send(c):undefined);
          })
        })
        app.listen(3000,err => { if (err) throw err;else console.log(`FastifyServer http://localhost:3000 to see`) })
        f=null;//reclaiming memory
      }
    },10)
  }(h)
}).catch(error => console.error("TypeORM connection error: ", error));