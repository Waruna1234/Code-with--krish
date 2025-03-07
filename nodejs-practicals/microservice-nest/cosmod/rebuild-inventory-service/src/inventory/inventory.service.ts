import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './etity/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class InventoryService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository:Repository<Product>,
    ){}

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product);
      }

      async getProductById(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
          throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
      }
    
      async getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
      }
    
      async validateStock(
        id: number,
        quantity: number,
      ): Promise<{ available: boolean }> {
        const product = await this.getProductById(id);
        return { available: product.quantity >= quantity };
      }

}
