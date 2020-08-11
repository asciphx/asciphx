import {Ctx,Class,Get,Post,Put,Del,Roles,Service} from "../utils/decorator"
import {W} from '../weblogic'
import {AdminService} from "../service/AdminService"
import {ctx} from "../utils/tool"

@Class()
export class AdminController{
  @Service(AdminService) adminSvc:AdminService
  
  @Roles([W.Qx,W.Login])//check login state
  @Get(1)//return array
  async all(req, rep) {
    return await this.adminSvc.all();
  }
  @Roles([W.Qx])
  @Ctx({code:3},{msg:2})//customize the return properties(because jsonSchema)
  @Get(0,"/:id")//Fusion object,and return it
  async one(req, rep) {
    return ctx(await (req.params.id |> this.adminSvc.one),{code:200},{msg:"lki"});
  }
  @Post()//default return object
  async save(req, rep) {
    return await this.adminSvc.save(req.body);
  }
  @Roles([W.Qx,W.Login])
  @Put("/:id")
  async update(req, rep) {
    return await this.adminSvc.update(req.params.id,req.body);
  }
  @Roles([W.Qx])
  @Del("/:id")
  async remove(req, rep) {
    return await this.adminSvc.remove(req.params.id);
  }
}