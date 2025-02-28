import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InventoryDetails{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    price: number;

    @Column()
    @IsNotEmpty()
    quantity: number;

}