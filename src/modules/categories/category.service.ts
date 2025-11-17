import { Inject, Injectable } from "@nestjs/common";
import { CategoryDto } from "src/dto/category.dto";
import type { ICategoryRepository } from "src/interface/ICategoryRepository";
import { CategoryModel } from "src/models/category.model";

@Injectable()
export class CategoryService {
    constructor(
        @Inject('ICategoryRepository')
        private readonly categoryRespository: ICategoryRepository,
    ) {}

    async getAll(): Promise<CategoryModel[]> {
        return await this.categoryRespository.findAll();
    }

    async createCategory(categoryDto: CategoryDto): Promise<CategoryModel> {
        return await this.categoryRespository.create(categoryDto);
    }

    async getCategoryById(id: number): Promise<CategoryModel | null> {
        return await this.categoryRespository.findById(id);
    }

    async update(id: number, data: Partial<CategoryDto>): Promise<CategoryModel | null> {
        console.log(data);
        return await this.categoryRespository.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        return await this.categoryRespository.delete(id);
    }

    async findRelationsById(id: number): Promise<CategoryModel | null> {   
        return await this.categoryRespository.findRelationsById(id);
    }
}