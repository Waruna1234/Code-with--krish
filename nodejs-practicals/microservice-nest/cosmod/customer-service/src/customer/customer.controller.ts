import { Body, Controller, Post ,Get,Param} from '@nestjs/common';
import {CustomerService} from './customer.service';
import {CustomerDetails} from './entity/customer.entity';

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService){}

    @Post()
    async addCustomer(@Body() customerDetails:CustomerDetails){
        return await this.customerService.addCustomerDetails(customerDetails);
    }

    @Get('all')
    async getAll(){
        return await this.customerService.getAll();
    }

    @Get(':id')
    async fetch(@Param('id') id:number){
        return await this.customerService.findById(id);
    }
   

}
