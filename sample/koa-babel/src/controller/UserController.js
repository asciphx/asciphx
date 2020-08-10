import {Class,Get,Post,Put,Del,Roles} from "../utils/decorator"
import {W} from '../weblogic'
import {UserService} from "../service/UserService"

@Class()//The default is the lowercase name of the entity of the controller
export class UserController{
  userSvc=new UserService()

  @Roles([W.Qx])
  @Get()
  async all(ctx) {
    ctx.body=await this.userSvc.all();
  }
  @Roles([W.Qx])
  @Get("/:id")
  async one(ctx) {
    // let v=await ctx.params.id |> this.userSvc.findOne;//will not work
    let v=await (ctx.params.id |> this.userSvc.one);
    if (!v) {
        ctx.status = 404;
        return;
    }
    ctx.body=v;
  }
  @Post()
  async save(ctx) {
    ctx.body=await this.userSvc.save(ctx.body);
  }
  @Roles([W.Qx,W.Login])
  @Put("/:id")
  async update(ctx) {
    ctx.body=await this.userSvc.update(ctx.params.id,ctx.body);
  }
  @Roles([W.Qx])
  @Del("/:id")
  async remove(ctx) {
    ctx.body=await this.userSvc.remove(ctx.params.id);
  }
}