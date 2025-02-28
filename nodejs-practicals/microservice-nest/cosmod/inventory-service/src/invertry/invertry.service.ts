
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import{InventoryDetails} from './entity/inventry.entity';

@Injectable()
export class InvertryService {
    constructor(@InjectRepository(InventoryDetails)private invetoryRepository:Repository<InventoryDetails>){}

    async addInventory(invetoryDetails:InventoryDetails): Promise<InventoryDetails | null>{
        
        const customer = this.invetoryRepository.create(invetoryDetails);
        return await this.invetoryRepository.save(customer);
    }

    async getAll() :Promise<InventoryDetails[] | null>{
        return this.invetoryRepository.find();
    }

    
    async findById(id:number) :Promise<InventoryDetails| null>{
        return this.invetoryRepository.findOne({
            where:{id}
        });
    }



}
