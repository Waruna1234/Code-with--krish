import { Module } from '@nestjs/common';
import { InvertryService } from './invertry.service';
import { InvertryController } from './invertry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {InventoryDetails} from './entity/inventry.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InventoryDetails])],
  providers: [InvertryService],
  controllers: [InvertryController]
})
export class InvertryModule {}
