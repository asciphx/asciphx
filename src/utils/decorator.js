const fs = require('fs'),path = require('path')
const JSONSCHEMA = require('../config').Config.jsonSchema
const RECORDROUTE = require('../config').Config.printRoute

let Routes=[],$s,$b=true,i=0;
const Class = (v:String) => _class => {
  let a=[];if(v==="")v=null;
  v=v??_class.name.replace(/(\w*)[A-Z]\w*/,"/$1").toLocaleLowerCase();
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
    });
    $b&&v!=="/"&&fs.writeFile(path.resolve("./dist/routes", `./${_class.name}.json`),
    JSON.stringify(a,['r','m','a'],"\t"),'utf8',e=>{if(e)console.error(e)})
  }a=null;
}
//jsonSchema now support defalut:"object",1:"array",2:"string",3:"number",etc.
//@Schema only on top of the other decorate except for @Roles,You can customize the return properties of the schema
const Ctx =(...i)=>(target, key, desc)=>{
  let f={result:{type:"object"}};
  for (let p of [...i])
  Object.defineProperty(f,Object.keys(p)[0],{
    enumerable: true,configurable: false,value: {type:JSONSCHEMA[p[Object.keys(p)[0]]]}
  });
  Routes[Routes.length-1].p=f;
}
const Get = (p?,r?) => (target, key, desc) => {typeof p==="string"?$s=p:$s="";
  Routes.push({c:target.constructor.name,a:key,m:"get",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Post = (p?,r?) => (target, key, desc) => {typeof p==="string"?$s=p:$s="";
  Routes.push({c:target.constructor.name,a:key,m:"post",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Put = (p?,r?) => (target, key, desc) => {typeof p==="string"?$s=p:$s="";
  Routes.push({c:target.constructor.name,a:key,m:"put",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Del = (p?,r?) => (target, key, desc) => {typeof p==="string"?$s=p:$s="";
  Routes.push({c:target.constructor.name,a:key,m:"delete",r:r??$s,s:typeof p==="number"?JSONSCHEMA[p]:"object",p:{}})
}
const Roles = (r:Array) => (target, key, desc)=>{let f=Routes[Routes.length-1];if(f.w){f.w=[...f.w,...r]}else{f.w=[...r]};f=null}
const Service=v=>(target,key)=>{ target[key] = new (v);return target }
export {Routes,Class,Ctx,Get,Post,Put,Del,Roles,Service};