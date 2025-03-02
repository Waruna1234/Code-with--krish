import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from './inventory/etity/product.entity';

@Module({
  imports: [InventoryModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:3306,
    username: 'root',
    password:'1234',
    database:'cosmos',
    entities:[Product],
    synchronize:true,

  })],
  
})
export class AppModule {}
