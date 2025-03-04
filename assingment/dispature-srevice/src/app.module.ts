import { Module } from '@nestjs/common';
import { DespatcherModule } from './despatcher/despatcher.module';
import { RegisterVehicle } from './despatcher/entity/vihicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DespatcherModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'cosmos',
      entities: [RegisterVehicle],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
