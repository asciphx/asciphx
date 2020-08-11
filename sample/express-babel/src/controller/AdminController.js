import {Class,Get,Post,Put,Del,Roles,Service} from "../utils/decorator"
import {W} from "../weblogic"
import {AdminService} from "../service/AdminService"

@Class()
export class AdminController{
  @Service(AdminService) adminSvc:AdminService

  @Roles([W.Qx])
  @Get()
  async all() {
    return this.adminSvc.all();
  }
  @Roles([W.Login])
  @Get("/:id")
  async one(req) {
    return this.adminSvc.one(req.params.id)
  }
  @Post()
  async save(req) {
    return this.adminSvc.save(req.body);
  }
  @Roles([W.Qx,W.Login])
  @Put("/:id")
  async update(req) {
    return this.adminSvc.update(req.params.id,req.body);
  }
  @Roles([W.Qx])
  @Del("/:id")
  async remove(req) {
    await this.adminSvc.remove(req.params.id);
  }
}