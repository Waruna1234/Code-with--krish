import { IsString } from "class-validator";

export class RegisterVehicletDto {
     
    @IsString()
    vehicle_number: string;
  
    @IsString()   
    city: string;
  }
  