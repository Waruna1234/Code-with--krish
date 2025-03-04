import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product} from './etity/product.entity';
import { InventoryController} from './inventory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [InventoryService],
  controllers:[InventoryController],
})
export class InventoryModule {}
