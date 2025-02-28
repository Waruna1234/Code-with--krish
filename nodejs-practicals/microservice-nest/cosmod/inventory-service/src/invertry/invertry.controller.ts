
import{InvertryService} from './invertry.service'
import{InventoryDetails} from './entity/inventry.entity';
import { Body, Controller, Post ,Get,Param} from '@nestjs/common';


@Controller('invertry')
export class InvertryController {


    constructor(private invertryService: InvertryService){}

    @Post()
    async addInventory(@Body() invetoryDetails:InventoryDetails){
        return await this.invertryService.addInventory(invetoryDetails);
    }

    @Get('all')
    async getAll(){
        return await this.invertryService.getAll();
    }
    @Get(':id')
    async fetch(@Param('id') id:number){
        return await this.invertryService.findById(id);
    }

}
