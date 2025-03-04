import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DespatcherService } from './despatcher.service';
import { RegisterVehicle } from './entity/vihicle.entity';
import { RegisterVehicletDto } from './dto/create-register-vihicle';

@Controller('despatcher')
export class DespatcherController {
    constructor(private readonly despatcherService: DespatcherService) { }

    @Post()
    async registerVehicle(
        @Body() registerVehicletDto: RegisterVehicletDto,
    ): Promise<RegisterVehicle> {
        return this.despatcherService.registerVehicle(registerVehicletDto);
    }

    @Get(':city')
    async retrieveVehicles(@Param('city') city: string): Promise<RegisterVehicle[]> {
        return this.despatcherService.retrieveVehicles(city);
    }

}
