import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { OrderItem } from './entity/order-item.entity';
import { createOrderDto } from './dto/create-order.dto';
import { OrderStatus, updateOrderStatusDto } from './dto/update-order.dto';
import { CustomerDetails } from './entity/custormer.entity';
import { Product } from './entity/product.entity';
import { error } from 'console';
import { Kafka } from 'kafkajs';

@Injectable()
export class OrderService {

    private readonly Kafka = new Kafka({ brokers: ['3.0.159.213:9092'] });
    private readonly producer = this.Kafka.producer();
    private readonly consumer = this.Kafka.consumer({ groupId: 'order-service' });

    async onModuleInit() {
        await this.producer.connect();
        await this.consumer.connect();
        
    }



    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(OrderItem)
        private ordetItemRepository: Repository<OrderItem>,
        @InjectRepository(CustomerDetails)
        private readonly customerRepository: Repository<CustomerDetails>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

    ) { }



    async create(createOrderDto: createOrderDto): Promise<Order | null> {
        const { customerId, items } = createOrderDto;

        const itemIds = createOrderDto.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity
        }));



        const existsCus = this.findCutomer(customerId);
        if (!existsCus) {
            throw new NotFoundException(`Customer not exist ${existsCus} not found`);

        }
        const qtyExcist = this.findItems(items);
        if (!qtyExcist) {
            throw new NotFoundException(`does not have enough stock.`);
        }



        const order = this.orderRepository.create({
            customerId,
            status: 'PENDING',
        })
        const savedOrder = await this.orderRepository.save(order);


        const orderItems = items.map((item) => {
            return this.ordetItemRepository.create({
                productId: item.productId,
                price: item.price,
                quantity: item.quantity,
                order: savedOrder,
            });
        });
        await this.ordetItemRepository.save(orderItems);

        this.updateIverntary(orderItems);
        this.producer.send({
            topic:'waruna-order.confirmed',
            messages:[{value: 'Order confirmed'}]
          });
  

        return this.orderRepository.findOne({
            where: { id: savedOrder.id },
            relations: ['items'],
        });


    }

    async fetch(id: any): Promise<Order | null> {
        return this.orderRepository.findOne({
            where: { id },
            relations: ['items'],
        });
    }

    async fetchAll(): Promise<Order[] | null> {
        return this.orderRepository.find({
            relations: ['items'],
        });
    }

    async updateOrderStatusDto(id: number, updateStatus: updateOrderStatusDto) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if (!order) {
            throw new NotFoundException(`order not found`)
        }
        if (
            order.status === OrderStatus.DELIVERED ||
            order.status === OrderStatus.CANCELED
        ) {
            throw new BadRequestException(
                `order status cannot be changed when its delivered`,
            );
        }
        order.status = updateStatus.status;
        return await this.orderRepository.save(order);

    }


    findCutomer(id) {

        const existCustomer = this.customerRepository.findOne({
            where: { id }
        });

        return existCustomer;

    }


    findItems(itemIds: Product[]) {

        for (const item of itemIds) {
            const itest = this.productRepository.findOne({
                where: { id: item.data.productId }
            });
            if (item.quantity < itest.data.quantity) {
                return false;
                break;
            }
        }
        return true;
    }

    updateIverntary(orderItems) {
        for (const order of orderItems) {
            const itest = this.productRepository.findOne({
                where: { id: order.productId }
            });
            if (!itest) {
                throw new NotFoundException(`Product not exist`);
            }
            itest.quantity == order.quantity;
            this.productRepository.save(itest)

        }
    }

}






