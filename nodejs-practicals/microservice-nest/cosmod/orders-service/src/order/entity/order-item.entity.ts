import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm";
import {Order} from "./order.entity"

@Entity()
export class OrderItem{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    productId:number;
    @Column('decimal')
    price:number;
    @Column()
    quantity:number;

    @ManyToOne(()=>Order,(order)=>order.items,{onDelete: 'CASCADE'})
    order: Order;

}