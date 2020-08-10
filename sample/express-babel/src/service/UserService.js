import {getRepository} from "typeorm"
import {User} from "../entity/User"

export class UserService{
  user=getRepository(User)
  async all(){
    return await this.user.find()
    // const existing = await this.findOneByAccount(user.account);
    // if (existing) throw new HttpException('账号已存在', 409);
  }
  /** search one
   * @param id
   */
  async one(id:Number){
    return await this.user.findOne(id);
  }
  /** save one
   * @param obj
   */
  async save(obj:User) {
    return this.user.save(obj);
  }
  /** update one
   * @param id
   * @param obj
   */
  async update(id,obj) {
    return this.user.update(id,obj);
  }
  /** remove one
   * @param id
   */
  async remove(id) {
    let rm = await this.user.findOne(id);
    return await this.user.remove(rm);
  }
}
