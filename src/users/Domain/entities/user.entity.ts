import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn()
    userId:number;
    @Column()
    userName:string;
    @Column()
    userLastName:string;
    @Column()
    userEmail:string;
    @Column()
    userPassword:string;
}
