import {html} from "./utils/tool"
import {Class,Get} from "./utils/decorator"

@Class()
export class Controller{
  //index.html
  @Get()
  @Get("index.html")
  index(req,res){
    html(req,res,{test:"test",author:"asciphx"})
  }
  //login.html
  @Get("login.html")
  login(req,rep){
    html(req,rep,{test:"test",author:"Login"})
  }
  //register.html
  @Get("register.html")
  register(req,rep){
    html(req,rep,{test:"test",author:"Register"})
  }
}