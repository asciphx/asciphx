const fs = require('fs')
const RECORDROUTE = require('../config').Config.printRoute
const path = require('path')

let Routes=[],$b=true,i=0
const Class = (v:String) => _class => {
  let a=[];if(v==="")v=null;
  v=v??_class.name.replace(/(\w*)[A-Z]\w*/,"/$1");
  for (let r=i,l=Routes.length;r<l;r++){
    if(Routes[r].c===_class.name){
      Routes[r].c=_class;Routes[r].r=v+Routes[r].r;a.push(r);i++
    }
  }
  if(RECORDROUTE){
    if(global.ONCE){$b=fs.existsSync("./dist/routes/");global.ONCE=false}else $b=true
    !$b&&fs.mkdir("./dist/routes/",function(err){
      if (err){return console.error(e);}
      fs.writeFile(path.resolve("./dist/routes", `./${_class.name}.json`),
      JSON.stringify(a,['r','m','a'],"\t"),'utf8',e=>{if(e)console.error(e)})
    })
    $b&&v!=="/"&&fs.writeFile(path.resolve("./dist/routes", `./${_class.name}.json`),
    JSON.stringify(a,['r','m','a'],"\t"),'utf8',e=>{if(e)console.error(e)})
  }a=null;
}
const Get = (r="") => (target, methodName, desc) => {
  Routes.push({c:target.constructor.name,a:methodName,m:"get",r:r})
}
const Post = (r="") => (target, methodName, desc) => {
  Routes.push({c:target.constructor.name,a:methodName,m:"post",r:r})
}
const Put = (r="") => (target, methodName, desc) => {
  Routes.push({c:target.constructor.name,a:methodName,m:"put",r:r})
}
const Del = (r="") => (target, methodName, desc) => {
  Routes.push({c:target.constructor.name,a:methodName,m:"delete",r:r})
}
const Roles = (r:Array) => (target, methodName, desc) => {
  let f=Routes[Routes.length-1];if(f.w){f.w=[...f.w,...r]}else{f.w=[...r]}f=null
}
export {Routes,Class,Get,Post,Put,Del,Roles};