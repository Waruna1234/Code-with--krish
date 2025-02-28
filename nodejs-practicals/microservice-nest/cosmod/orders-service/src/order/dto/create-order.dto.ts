import { Type } from "class-transformer";
import { IsInt,IsArray,ValidateNested } from "class-validator";

class OrderItemDto {

    @IsInt()  
    productId: number;
  
    @IsInt()  
    price: number;
  
    @IsInt()  
    quantity: number;
  
  }
  
  
  
  export class createOrderDto {
  
    @IsInt()  
    customerId: number;
  
    @IsArray()  
    @ValidateNested({ each: true })
    @Type(() => OrderItemDto)
    items: OrderItemDto[];
  
  }
  
  