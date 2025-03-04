import { IsEmail, IsString } from "class-validator";

export class  CreateCustomeDto{
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    add: string;
}