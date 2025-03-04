import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './order/entity/order-item.entity';
import { Order } from './order/entity/order.entity';
import { Product } from './order/entity/product.entity';
import { CustomerDetails } from './order/entity/custormer.entity';

@Module({
  imports: [OrderModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:3306,
    username: 'root',
    password:'1234',
    database:'cosmos',
    entities:[OrderItem, Order,Product,CustomerDetails],
    synchronize:true, //do not use production envirement
  })],
})
export class AppModule {}
