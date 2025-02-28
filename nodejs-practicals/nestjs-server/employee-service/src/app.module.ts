import { Module } from '@nestjs/common';
import {EmplyeesModule} from './employees/emplyees.module'


@Module({
  imports: [EmplyeesModule],
})
export class AppModule {}
