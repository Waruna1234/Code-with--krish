import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class NotificationService implements OnModuleInit{
    private readonly Kafka = new Kafka({brokers:['3.0.159.213:9092']})
    private readonly producer = this.Kafka.producer();
    private readonly consumer = this.Kafka.consumer({groupId:'notification-service'});

    async onModuleInit() {
        await this.producer.connect();
        await this.consumer.connect();
        await this.consumeConfermOrders();
    }

    async consumeConfermOrders(){
        await this.consumer.subscribe({topic: 'waruna-order.confirmed'});

    
        await this.consumer.run({
            
            eachMessage: async({message})=>{

                try{
                const receiveMessage =  JSON.parse(
                    message.value.toString(),
                  );
                  console.log(receiveMessage);
                }catch{

                }
            }
        
        })
    }



}
