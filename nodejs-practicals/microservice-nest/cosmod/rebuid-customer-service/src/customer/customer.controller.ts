import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDetails } from './entity/custormer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

    @Post()
    async addCustomer(@Body() customerDetails:CustomerDetails):Promise<CustomerDetails>{
        return this.customerService.addCustomerDetails(customerDetails);
    }

    @Get()
    async getAll():Promise<CustomerDetails[]>{
        return this.customerService.getAll();
    }
    
    
    @Get(':id')
    async fetch(@Param('id') id:number):Promise<CustomerDetails>{
        return this.customerService.findById(id);
    }


}
