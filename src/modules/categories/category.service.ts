import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryDto } from "src/dto/category.dto";
import { Category } from "src/entities/category.entity";
import { CategoryModel } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRespository: Repository<Category>,
    ) {}

    async getAll(): Promise<CategoryModel[]> {
        return await this.categoryRespository.find();
    }

    async createCategory(categoryDto: CategoryDto): Promise<CategoryModel> {
        const newCategory = this.categoryRespository.create({
            categoryName: categoryDto.categoryName,
            description: categoryDto.description,
        })
        return await this.categoryRespository.save(newCategory);
    }

    async getCategoryById(id: number): Promise<CategoryModel | null> {
        return await this.categoryRespository.findOneBy({
            id: Number(id),
        });
    }
}