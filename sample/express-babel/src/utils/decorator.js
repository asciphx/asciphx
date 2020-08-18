const fs = require('fs')
const RECORDROUTE = require('../config').Config.printRoute
const path = require('path')

let Routes=[],$b=true,$once=true,i=0,$
const Class = (v:String) => _ => {
  let a=[];if(v==="")v=null;
  v=v??_.name.replace(/(\w*)[A-Z]\w*/,"/$1");
  for (let r=i,l=Routes.length;r<l;r++){
    Routes[r].r=v+Routes[r].r;if(RECORDROUTE)a.push(Routes[r]);
    Routes[r].a=_.prototype[Routes[r].a].bind($);i++
  }
  if(RECORDROUTE){
    if($once){$b=fs.existsSync("./dist/routes/");$once=false}else $b=true
    !$b&&fs.mkdir("./dist/routes/",function(err){
      if (err){return console.error(err);}
      fs.writeFile(path.resolve("./dist/routes", `./${v===""?"$Controller":_.name}.json`),
      JSON.stringify(a,['r','m'],"\t"),'utf8',e=>{if(e)console.error(e)});a=null
    })
    if($b){
      fs.writeFile(path.resolve("./dist/routes", `./${v===""?"$Controller":_.name}.json`),
      JSON.stringify(a,['r','m'],"\t"),'utf8',e=>{if(e)console.error(e)});a=null
    }_=$=null
  }else a=_=$=null;
}
const Get = (r="") => (target, key) => {
  Routes.push({a:key,m:"get",r:r})
}
const Post = (r="") => (target, key) => {
  Routes.push({a:key,m:"post",r:r})
}
const Put = (r="") => (target, key) => {
  Routes.push({a:key,m:"put",r:r})
}
const Del = (r="") => (target, key) => {
  Routes.push({a:key,m:"delete",r:r})
}
const Roles = (...r:Array) => (target, key) => {
  let f=Routes[Routes.length-1];if(f.a!==key){
    console.log(target.constructor.name+":"+key+" use @Roles has to be on the top!")
  }else if(f.w){f.w=[...f.w,...r]}else{f.w=r}f=null
}
const Service=v=>(target,key)=>{Object.defineProperty($={},key,{enumerable:false,configurable:false,writable:false,value:new(v)})}
export {Routes,Class,Get,Post,Put,Del,Roles,Service};