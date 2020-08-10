import {Class,Get,Post,Put,Del,Roles} from "../utils/decorator"
import {W} from "../weblogic"
import {UserService} from "../service/UserService"

@Class()
export class UserController{
  userSvc=new UserService()

  @Roles([W.Qx])
  @Get()
  async all() {
    return this.userSvc.all();
  }
  @Roles([W.Qx])
  @Get("/:id")
  async one(req) {
    return this.userSvc.one(req.params.id)
  }
  @Post()
  async save(req) {
    return this.userSvc.save(req.body);
  }
  @Roles([W.Qx,W.Login])
  @Put("/:id")
  async update(req) {
    return this.userSvc.update(req.params.id,req.body);
  }
  @Roles([W.Qx])
  @Del("/:id")
  async remove(req) {
    await this.userSvc.remove(req.params.id);
  }
}