import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerDetails } from './customer/entity/custormer.entity';

@Module({
  imports: [CustomerModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:3306,
    username: 'root',
    password:'1234',
    database:'cosmos',
    entities:[CustomerDetails],
    synchronize:true,

  })],
  
})
export class AppModule {}
