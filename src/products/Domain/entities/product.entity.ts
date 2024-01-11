import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Products")
export class Product {
    @PrimaryGeneratedColumn()
    productId:number;
    @Column()
    productName:string;
    @Column()
    productDescription:string;
}
