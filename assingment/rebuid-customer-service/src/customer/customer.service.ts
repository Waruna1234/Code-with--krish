import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerDetails } from './entity/custormer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(CustomerDetails)private readonly customerRepository:Repository<CustomerDetails>){}

    async addCustomerDetails(customerDetails:CustomerDetails): Promise<CustomerDetails>{
        
        const customer = this.customerRepository.create(customerDetails);
        return await this.customerRepository.save(customer);
    }

    async getAll() :Promise<CustomerDetails[]>{
        return await this.customerRepository.find();
    }

    
    async findById(id:number) : Promise<CustomerDetails>{
        const customer = await this.customerRepository.findOne({
            where:{id}
        });
        if(!customer){
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return customer;
    }

}
