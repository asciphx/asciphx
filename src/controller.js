import {html} from "./utils/tool"
import {Class,Get} from "./utils/decorator"

@Class()//default is `/`
export class Controller{
  //index.html
  @Get()
  index(req,rep){
    html(req,rep,{test:"test",author:"asciphx"})
  }
  //login.html
  @Get("login")
  login(req,rep){
    html(req,rep,{test:"test",author:"Login"})
  }
  //register.html
  @Get("register")
  register(req,rep){
    html(req,rep,{test:"test",author:"Register"})
  }
}