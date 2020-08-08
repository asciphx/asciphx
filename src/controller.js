import {html} from "./utils/tool"
import {Class,Get} from "./utils/decorator"

@Class()
export class Controller{
  //index.html
  @Get()
  init(req,rep){
    html(req,rep,{test:"test",author:"asciphx"})
  }
  @Get("index.html")
  index(req,rep){
    html(req,rep,{test:"test",author:"asciphx"})
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