import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CustomerDetails} from './entity/customer.entity';
import {CustomerController} from './customer.controller';
import {CustomerService} from './customer.service'

@Module({
    imports:[
        TypeOrmModule.forFeature([CustomerDetails])
    ],
    controllers:[CustomerController],
    providers:[CustomerService],
})
export class CustomerModule {}
