import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerDetails } from './entity/custormer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CustomerDetails])],
  controllers: [CustomerController],
  providers:[CustomerService]
})
export class CustomerModule {}
