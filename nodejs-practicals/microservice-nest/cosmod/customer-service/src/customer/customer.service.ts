import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CustomerDetails} from './entity/customer.entity'

@Injectable()
export class CustomerService {

    constructor(@InjectRepository(CustomerDetails)private customerRepository:Repository<CustomerDetails>){}

    async addCustomerDetails(customerDetails:CustomerDetails): Promise<CustomerDetails | null>{
        
        const customer = this.customerRepository.create(customerDetails);
        return await this.customerRepository.save(customer);
    }

    async getAll() :Promise<CustomerDetails[] | null>{
        return this.customerRepository.find();
    }

    
    async findById(id:number) :Promise<CustomerDetails| null>{
        return this.customerRepository.findOne({
            where:{id}
        });
    }





}
