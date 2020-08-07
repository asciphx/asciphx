import fs from "fs"
import url from "url"

const ctx=(obj,...arr:Array<Object>)=>{
  let o;obj===null?o={}:o={result:obj};
  Object.assign(o,...arr);return o
}
const html=(req,rep,...obj:Array<Object>)=>{
  let u=url.parse(req.url).path.replace(/^\//,'');
  rep.view(u===""?u="index.html":u=u+".html", ...obj)
}
const suffix=(name:String)=>{
  return name.replace(/().*(?=)\./,'\.');
}
const sqlCheck=(str)=>{
  if(/int/.test(str))return "number"
  if(/text|char/.test(str))return "string"
  return "number"
}
const readFileList=(path,filesList)=>{
  fs.readdirSync(path).forEach((itm, index)=>{
    var stat =fs.statSync(path + itm);
    if (stat.isDirectory()) {
        readFileList(path + itm + "/", filesList)
    } else {
        filesList.push(path+itm);
    }
  })
}
const deleteAll=async (path)=>{
  path.slice(-1)==="/"?undefined:path=path+"/";
  fs.readdirSync(path).forEach((itm)=>{
      fs.unlinkSync(path + itm)
  })
}
const deleteOne=async (path)=>{
  if(fs.existsSync(path))fs.unlinkSync(path);
}
const fileAction=async (request, response)=>{
  let filesList =new Array;
  await readFileList(request.query.path, filesList);
  await response.send(filesList);
}
export {ctx,html,suffix,sqlCheck,readFileList,deleteAll,deleteOne,fileAction}
