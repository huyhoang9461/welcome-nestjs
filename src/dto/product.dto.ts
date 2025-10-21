import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
    id?: number;

    @ApiProperty()
    @IsNotEmpty({message: 'Category ID is required'})
    categoryId?: number;

    @ApiProperty()
    @MinLength(5, {message: 'Product name must be than 5 characters'})
    productName?: string;

    @ApiProperty()
    @IsNumber({},{message: 'Price must be a number'})
    price?: number;
}