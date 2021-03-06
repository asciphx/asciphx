import {Class,Get,Post,Put,Del,Roles,Service} from "../utils/decorator"
import {W} from '../weblogic'
import {AdminService} from "../service/AdminService"

@Class("/admin")
export class AdminController{
  @Service(AdminService) adminSvc:AdminService
  
  @Roles(W.Qx,W.Login)
  @Get()
  async all(ctx) {
    ctx.body=await this.adminSvc.all()
  }
  @Roles(W.Login)
  @Roles(W.Qx)
  @Get("/:id")
  async one(ctx) {
    let v=await this.adminSvc.one(ctx.params.id);
    if (!v) {
        ctx.status = 404;
        return;
    }
    ctx.body=v;
  }
  @Post()
  async save(ctx) {
    ctx.body=await this.adminSvc.save(ctx.request.body);
  }
  @Roles(W.Qx,W.Login)
  @Put("/:id")
  async update(ctx) {
    ctx.body=await this.adminSvc.update(ctx.params.id,ctx.request.body);
  }
  @Roles(W.Qx)
  @Del("/:id")
  async remove(ctx) {
    ctx.body=await this.adminSvc.remove(ctx.params.id);
  }
}