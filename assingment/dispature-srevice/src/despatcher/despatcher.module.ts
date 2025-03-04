import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterVehicle } from './entity/vihicle.entity';
import { DespatcherController } from './despatcher.controller';
import { DespatcherService } from './despatcher.service';

@Module({
    imports: [TypeOrmModule.forFeature([RegisterVehicle])],
    providers: [DespatcherService],
  controllers: [DespatcherController],
})
export class DespatcherModule {}
