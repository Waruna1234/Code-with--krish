import { Controller, Post ,Get,Body, Param,Patch} from '@nestjs/common';
import { createOrderDto } from './dto/create-order.dto';
import {OrderService} from './order.service';
import { Order } from './entity/order.entity';
import {updateOrderStatusDto} from './dto/update-order.dto';


@Controller('orders')
export class OrderController {

    constructor(private ordersService: OrderService){}

    @Post()
    async createOrder(@Body() createOrderDto:createOrderDto){
        console.log(createOrderDto);
        return await this.ordersService.create(createOrderDto);
    }

    @Get(':id')
    async fetch(@Param('id') id:number){
        return await this.ordersService.fetch(id);
    }

    @Get()
    async fetchAll(){
        return await this.ordersService.fetchAll();
    }

    @Patch(':id/status')
    async updateOderStatus(@Param('id') id:number, @Body() updateOderStatus:updateOrderStatusDto,){
        return await this.ordersService.updateOrderStatusDto(id,updateOderStatus);
    }



}
