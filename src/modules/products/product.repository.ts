import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/entities/product.entity';
import { ProductModel } from 'src/models/product.model';
import { Repository } from 'typeorm';
import { CategoryService } from '../categories/category.service';
import { IProductRepository } from 'src/interface/IProdcutRepository';

@Injectable()
export class productRepository implements IProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,

        private categoryService: CategoryService,
    ) { }

    async findAll(): Promise<ProductModel[]> {
        const products: ProductEntity[] = await this.productRepository.find({ relations: ['category'] });

        const productModels: ProductModel[] = products.map((productEntity) => {
            return new ProductModel({
                id: productEntity.id,
                productName: productEntity.productName,
                price: productEntity.price,
                categoryId: productEntity.category?.id
            });
        });

        return productModels;
    }

    async create(productDto: ProductDto): Promise<ProductModel> {
        const category = await this.categoryService.getCategoryById(Number(productDto.categoryId));
        if (!category) {
            throw new NotFoundException('Category not found');
        }
        const newProduct = this.productRepository.create({
            productName: productDto.productName,
            price: productDto.price,
            category: category,
        });
        const savedProduct = await this.productRepository.save(newProduct);
        const productModel: ProductModel = new ProductModel({
            id: savedProduct.id,
            productName: savedProduct.productName,
            price: savedProduct.price,
            categoryId: savedProduct.category?.id
        });
        return productModel;
    }

    async findById(id: number): Promise<ProductModel | null> {
        const product = await this.productRepository.findOne({
            where: { id: Number(id) },
            relations: ['category'],
        });
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        const productModel: ProductModel = new ProductModel({
            id: product.id,
            productName: product.productName,
            price: product.price,
            categoryId: product.category?.id
        });
        return productModel;
    }

    async update(id: number, data: ProductDto): Promise<ProductModel | null> {
        await this.productRepository.update(id, data);
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.productRepository.delete(id);
        return result.affected != null && result.affected > 0;
    }
}
