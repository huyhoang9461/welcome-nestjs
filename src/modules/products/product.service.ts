import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductModel } from 'src/models/product.model';
import { Repository } from 'typeorm';
import { CategoryService } from '../categories/category.service';
import type { IProductRepository } from 'src/interface/IProdcutRepository';

@Injectable()
export class ProductService {
    constructor(
        @Inject('IProductRepository')
        private readonly productRepository: IProductRepository
    ) { }

    async getProducts(): Promise<ProductModel[]> {
        return await this.productRepository.findAll();
    }

    async createProduct(productDto: ProductDto): Promise<ProductModel> {
        return await this.productRepository.create(productDto);
    }

    async getDetailProduct(id: number): Promise<ProductModel | null> {
        return await this.productRepository.findById(id)
    }

    async updateProduct(productDto: ProductDto, id: number): Promise<ProductModel | null> {
        return await this.productRepository.update(id, productDto);
    }

    async deleteProduct(id: number): Promise<boolean> {
        return await this.productRepository.delete(id);
    }
}
