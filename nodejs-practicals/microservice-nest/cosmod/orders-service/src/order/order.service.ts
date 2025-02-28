import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItem } from './entity/order-item.entity';
import { createOrderDto } from './dto/create-order.dto';
import {OrderStatus,updateOrderStatusDto} from './dto/update-order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
         private orderRepository: Repository<Order>,
        @InjectRepository(OrderItem) 
        private ordetItemRepository: Repository<OrderItem>,
){}


async create(createOrderDto:createOrderDto): Promise<Order | null>{
    const{customerId, items} = createOrderDto;

    const order=this.orderRepository.create({
        customerId,
        status: 'PENDING',
    })
    const savedOrder=await this.orderRepository.save(order);

    
    const orderItems=items.map((item)=>{
        return this.ordetItemRepository.create({
        productId: item.productId,
        price:item.price,
        quantity:item.quantity,
        order: savedOrder,
    });   
});
await this.ordetItemRepository.save(orderItems);
return this.orderRepository.findOne({
    where: {id: savedOrder.id},
    relations: ['items'],
});
}

async fetch(id : any): Promise<Order | null>{
    return this.orderRepository.findOne({
        where: {id},
        relations: ['items'],
    });
}

async fetchAll(): Promise<Order[] | null>{
    return this.orderRepository.find({
        relations: ['items'],
    });
}

async updateOrderStatusDto(id:number,updateStatus:updateOrderStatusDto){
    const order = await this.orderRepository.findOne({where:{id}});
    if(!order){
        throw new NotFoundException(`order not found`)
    }
    if(
        order.status===OrderStatus.DELIVERED ||
        order.status===OrderStatus.CANCELED
    ){
        throw new BadRequestException(
            `order status cannot be changed when its delivered`,
        );
    }
    order.status = updateStatus.status;
    return await this.orderRepository.save(order);

}

}

