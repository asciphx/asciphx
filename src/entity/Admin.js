import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id:Number
  @Column("varchar",{length: 25, name: "username"})
  username:String
  @Column("varchar",{length: 50})
  password:String
  @Column("varchar",{length: 25})
  name:String
  @Column("varchar",{length: 50,name: "photo"})
  photo:String
  constructor(a:String,b:String,c=a,d=""){
      this.username=a;
      this.password=b;
      this.name=c;
      this.photo=d;
  }
}