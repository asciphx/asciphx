import {getRepository} from "typeorm"
import {Admin} from "../entity/Admin"

export class AdminService{
  admin=getRepository(Admin)
  all(){
    return this.admin.find()
  }
  /** search one
   * @param id userid
   */
  one(id:Number){
    return this.admin.findOne(id);
  }
  /** save one
   * @param obj
   */
  save(obj:Admin) {
    return this.admin.save(obj);
  }
  /** update one
   * @param id
   * @param obj
   */
  update(id,obj) {
    return this.admin.update(id,obj);
  }
  /** remove one
   * @param id
   */
  async remove(id) {
    let rm = await this.admin.findOne(id);
    return this.admin.remove(rm);
  }
}
