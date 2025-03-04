import { Injectable } from '@nestjs/common';
import { RegisterVehicletDto } from './dto/create-register-vihicle';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterVehicle } from './entity/vihicle.entity';
import { Kafka } from 'kafkajs';   

@Injectable()
export class DespatcherService {

    private readonly Kafka = new Kafka({ brokers: ['3.0.159.213:9092'] });
    private readonly producer = this.Kafka.producer();
    private readonly consumer = this.Kafka.consumer({ groupId: 'product-service' });

    async onModuleInit() {
        await this.producer.connect();
        await this.consumer.connect();
        await this.consumeOrderCreated();
      }

      async consumeOrderCreated() {
        await this.consumer.subscribe({ topic: 'waruna-order.confirmed' });
        
    
        await this.consumer.run({      
          eachMessage: async ({ message }) => {

           
            const { customerId,city, customerName, items } = JSON.parse(
              message.toString(),
            );
            const getVehicle =this.productRepository.find({ where: { city } })
            if(!getVehicle){
                console.log(`Cannot find vehicle for order ${items.orderNumber}`)
            }
            console.log(`Vehicle allocated for order ${items.orderNumber}`)
        }
    })
}


    constructor(
        @InjectRepository(RegisterVehicle)
        private readonly productRepository: Repository<RegisterVehicle>,
    ) { }

    async registerVehicle(registerVehicletDto: RegisterVehicletDto): Promise<RegisterVehicle> {
        const product = this.productRepository.create(registerVehicletDto);
        return this.productRepository.save(product);
    }

    async retrieveVehicles(city): Promise<RegisterVehicle[]> {
        return this.productRepository.find({ where: { city } });
    }


}
