import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ProductModel } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<ResponseData<ProductModel[]>> {
    try {
      return new ResponseData<ProductModel[]>(
        await this.productService.getProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductModel[]>(
        await this.productService.getProducts(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createProduct(@Body() productDto: ProductDto): Promise<ResponseData<ProductModel>> {
    try {
      return new ResponseData<ProductModel>(
        await this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductModel>(
        await this.productService.createProduct(productDto),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  async getDetailProduct(@Param('id') id: number): Promise<ResponseData<ProductModel | undefined>> {
    try {
      return new ResponseData<ProductModel | undefined>(
        await this.productService.getDetailProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductModel | undefined>(
        await this.productService.getDetailProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: number, @Body() productDto: ProductDto): Promise<ResponseData<ProductModel>> {
    try {
      return new ResponseData<ProductModel>(
        await this.productService.updateProduct(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ProductModel>(
        await this.productService.updateProduct(productDto, id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number): Promise<ResponseData<boolean>> {
    try {
      return new ResponseData<boolean>(
        await this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<boolean>(
        await this.productService.deleteProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
