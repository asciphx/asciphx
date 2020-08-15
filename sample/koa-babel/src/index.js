import Koa,{Context} from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import fs from "fs"
import views from "koa-views"
import {createConnection} from "typeorm"
import {Routes} from "./utils/decorator"
import {Controller} from "./controller"
// import {User} from "./entity/User"

createConnection().then(async connection => {
  console.time("time");global.ONCE=true;
  await fs.readdirSync(__dirname+"/controller").forEach((i)=>{require(__dirname+"/controller/"+i)})
  const app = new Koa().use(bodyParser()).use(views(require('path').join(__dirname,'../views'),{
    extension: 'html',map: { html: "ejs" }
  }))
  const router = new Router()
  Routes.forEach(r => {
    router[r.m](...r.w?[r.r,...r.w]:[r.r],async (ctx:Context,next) =>{
      await r.a(ctx,next)/*Test ctx:Context below this line,be prompted with code(because performance)*/

    })
  })
  // const u = new User("testman");
  // connection.getRepository(User).save(u).then(u => {
  //   console.log("user has been saved: ", u);
  // });
  app.use(router.routes()).use(router.allowedMethods()).listen(3000,"0.0.0.0",()=>
    console.log(`KoaServer http://localhost:3000 to see`))
  console.timeEnd("time")
}).catch(error => console.log("TypeORM connection error: ", error))