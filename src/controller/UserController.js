import {Ctx,Class,Get,Post,Put,Del,Roles} from "../utils/decorator"
import {W} from '../weblogic'
import {UserService} from "../service/UserService"
import { ctx } from "../utils/tool";

@Class()
export class UserController{
  userSvc = new UserService()

  @Roles([W.Qx])
  @Get(2,"/str")//return string
  async str(req, rep) {
    return "dhsdhdsh";//or rep.send("dhsdhdsh")
  }
  @Roles([W.Qx])
  @Ctx({etc:2},{code:3})//Write each key value individually
  @Get(0,"/json")//return define json
  async json(req, rep) {
    return ctx(null,{etc:"json",code:200});//no need to write separately
  }
  @Get(1)//return array
  async all(req, rep) {
    return await this.userSvc.all();
  }
  @Roles([W.Qx])
  @Get("/:id")
  async one(req, rep) {
    return await (req.params.id |> this.userSvc.one);
  }
  @Post()
  async save(req, rep) {
    return await this.userSvc.save(req.body);
  }
  @Put("/:id")
  async update(req, rep) {
    return await this.userSvc.update(req.params.id,req.body);
  }
  @Del("/:id")
  async remove(req, rep) {
    return await this.userSvc.remove(req.params.id);
  }
}