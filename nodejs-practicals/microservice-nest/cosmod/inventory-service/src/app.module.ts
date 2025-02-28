import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvertryModule } from './invertry/invertry.module';
import {InventoryDetails} from './invertry/entity/inventry.entity';

@Module({
  imports: [InvertryModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:3306,
    username: 'root',
    password:'1234',
    database:'cosmos',
    entities:[InventoryDetails],
    synchronize:true, //do not use production envirement
  })],
})
export class AppModule {}
