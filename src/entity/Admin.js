import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column("varchar",{length: 25, name: "username"})
    username:String;

    @Column("varchar")
    password:String;

    @Column("varchar",{name: "name"})
    name:String;
    
    @Column("varchar")
    photo:String;
    
    constructor(a:String,b:String,c=a,d=""){
        this.username=a;
        this.password=b;
        this.name=c;
        this.photo=d;
    }
}