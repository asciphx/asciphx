import fs from "fs"
import url from "url"
const html=async(req,res,...obj:Array<Object>)=>{
  await res.render(url.parse(req.url).path.replace(/^\//,'')||"index",...obj);
}
const suffix=(name:String)=>{
  return name.replace(/().*(?=)\./,'\.');
}
const readFileList=(path,filesList)=>{
  fs.readdirSync(path).forEach((itm, index)=>{
    let stat =fs.statSync(path + itm);
    if (stat.isDirectory())
      readFileList(path + itm + "/", filesList)
    else filesList.push(path+itm);
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
export {html,suffix,readFileList,deleteAll,deleteOne,fileAction}