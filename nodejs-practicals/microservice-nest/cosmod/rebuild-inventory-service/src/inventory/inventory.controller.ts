import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {InventoryService} from './inventory.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from './etity/product.entity';


@Controller('inventory')
export class InventoryController {

    constructor(private readonly productsService: InventoryService) {}

    @Post()
    async createProduct(
      @Body() createProductDto: CreateProductDto,
    ): Promise<Product> {
      return this.productsService.createProduct(createProductDto);
    }
  
    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<Product> {
      return this.productsService.getProductById(id);
    }
  
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return this.productsService.getAllProducts();
    }
  
    @Get(':id/validate')
    async validateStock(
      @Param('id') id: number,
      @Query('quantity') quantity: number,
    ): Promise<{ available: boolean }> {
      return this.productsService.validateStock(id, quantity);
    }

    
    
}   
