import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../../entities/product.entity';
import { CategoryModule } from '../categories/category.module';
import { productRepository } from './product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]), 
    CategoryModule
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      useClass: productRepository,
      provide: 'IProductRepository',
    }
  ],
  exports: [ProductService],
})
export class ProductModule {}
