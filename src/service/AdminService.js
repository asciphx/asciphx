import {getRepository} from "typeorm"
import {Admin} from "../entity/Admin"

export class AdminService{
  admin=getRepository(Admin)
  async all(){
    return await this.admin.find()
  }
  /** search one
   * @param id userid
   */
  async one(id:Number){
    return await this.admin.findOne(id);
  }
  /** save one
   * @param obj
   */
  async save(obj:Admin) {
    return await this.admin.save(obj);
  }
  /** update one
   * @param id
   * @param obj
   */
  async update(id,obj) {
    return await this.admin.update(id,obj);
  }
  /** remove one
   * @param id
   */
  async remove(id) {
    let rm = await this.admin.findOne(id);
    return await this.admin.remove(rm);
  }
}
