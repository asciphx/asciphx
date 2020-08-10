import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class User {
    //id的写法跟id:Number一样，都行
    @PrimaryGeneratedColumn()
    id=undefined;

    @Column("varchar",{length: 25})
    firstName:String;

    @Column("varchar",{length: 25})
    lastName:String;

    @Column("int")
    age:Number;

    constructor(a,b=a,c=0){
        this.firstName=a;
        this.lastName=b;
        this.age=c;
    }
}