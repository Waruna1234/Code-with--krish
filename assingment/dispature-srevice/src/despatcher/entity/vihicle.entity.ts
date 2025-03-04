import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegisterVehicle{
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicle_number: string;

  @Column()
  city: string;

}