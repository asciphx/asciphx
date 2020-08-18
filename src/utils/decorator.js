const fs = require('fs'),path = require('path')
const JSONSCHEMA = require('../config').Config.jsonSchema
const RECORDROUTE = require('../config').Config.printRoute

let Routes=[],$s,$b=true,$once=true,i=0,$
const Class = (v:String) => _ => {
  let a=[];if(v==="")v=null;
  v=v??_.name.replace(/(\w*)[A-Z]\w*/,"/$1").toLocaleLowerCase();
  for (let r=i,l=Routes.length;r<l;r++){
    Routes[r].r=v+Routes[r].r;if(RECORDROUTE)a.push(Routes[r]);
    Routes[r].c=_.name;Routes[r].a=_.prototype[Routes[r].a].bind($);i++
  }
  if(RECORDROUTE){
    if($once){$b=fs.existsSync("./dist/routes/");$once=false}else $b=true
    !$b&&fs.mkdir("./dist/routes/",function(err){
      if (err){return console.error(err);}
      fs.writeFile(path.resolve("./dist/routes", `./${v==="/"?"$Controller":_.name}.json`),
      JSON.stringify(a,['r','m'],"\t"),'utf8',e=>{if(e)console.error(e)});a=null
    });
    if($b){
      fs.writeFile(path.resolve("./dist/routes", `./${v==="/"?"$Controller":_.name}.json`),
      JSON.stringify(a,['r','m'],"\t"),'utf8',e=>{if(e)console.error(e)});a=null
    }_=$=null
  }else a=_=$=null;
}
//jsonSchema now support defalut:"object",1:"array",2:"string",3:"number",etc.
//@Schema only on top of the other decorate except for @Roles,You can customize the return properties of the schema
const Ctx =(...i)=>(target, key)=>{
  let f={result:{type:"object"}};
  for (let p of [...i])
  Object.defineProperty(f,Object.keys(p)[0],{
    enumerable: true,configurable: false,value: {type:JSONSCHEMA[p[Object.keys(p)[0]]]}
  });
  Routes[Routes.length-1].p=f;
}
const Get = (p?,r?) => (target, key) => {typeof p==="string"?$s=p:$s="";
  Routes.push({a:key,m:"get",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Post = (p?,r?) => (target, key) => {typeof p==="string"?$s=p:$s="";
  Routes.push({a:key,m:"post",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Put = (p?,r?) => (target, key) => {typeof p==="string"?$s=p:$s="";
  Routes.push({a:key,m:"put",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Del = (p?,r?) => (target, key) => {typeof p==="string"?$s=p:$s="";
  Routes.push({a:key,m:"delete",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Roles = (...r:Array) => (target, key)=>{let f=Routes[Routes.length-1];if(f.a!==key){
  console.log(target.constructor.name+":"+key+" use @Roles has to be on the top!")
}else if(f.w){f.w=[...f.w,...r]}else{f.w=r};f=null}
const Service=v=>(target,key)=>{Object.defineProperty($={},key,{enumerable:false,configurable:false,writable:false,value:new(v)})}
export {Routes,Class,Ctx,Get,Post,Put,Del,Roles,Service};