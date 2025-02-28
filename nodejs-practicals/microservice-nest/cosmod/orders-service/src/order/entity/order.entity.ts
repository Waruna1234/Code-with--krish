import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {OrderItem } from "./order-item.entity"

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    customerId:number;
    @CreateDateColumn()
    creatAt:Date;
    @Column({default: 'PENDING'})
    status:string;

    @OneToMany(()=>OrderItem,(orderItem)=>orderItem.order,{onDelete: 'CASCADE'})
    items:any;
}