import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class User {
    //非自增id用PrimaryColumn
    @PrimaryGeneratedColumn()
    id=undefined;

    @Column("varchar")
    firstName:String;

    @Column("varchar")
    lastName:String;

    @Column("int")
    age:Number;

    constructor(a,b=a,c=0){
        this.firstName=a;
        this.lastName=b;
        this.age=c;
    }
}
