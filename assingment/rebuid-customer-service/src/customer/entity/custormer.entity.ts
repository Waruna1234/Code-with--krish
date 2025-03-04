import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerDetails{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()    
    email: string;

    @Column()
    add: string;

}