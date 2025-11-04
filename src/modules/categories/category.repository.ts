import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryDto } from "src/dto/category.dto";
import { CategoryEntity } from "src/entities/category.entity";
import { ICategoryRepository } from "src/interface/ICategoryRepository";
import { CategoryModel } from "src/models/category.model";
import { Repository } from "typeorm";

@Injectable()
export class CategoryRepository implements ICategoryRepository {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRespository: Repository<CategoryEntity>,
    ) { }

    async findAll(): Promise<CategoryModel[]> {
        return await this.categoryRespository.find();
    }

    async findById(id: number): Promise<CategoryModel | null> {
        return await this.categoryRespository.findOne({ where: { id } });
    }

    async create(categoryDto: CategoryDto): Promise<CategoryModel> {
        const newCategory = this.categoryRespository.create({
            categoryName: categoryDto.categoryName,
            description: categoryDto.description,
        })
        return await this.categoryRespository.save(newCategory);
    }

    async update(id: number, data: Partial<CategoryDto>): Promise<CategoryModel | null> {
        await this.categoryRespository.update(id, data);
        return this.findById(id);
    };

    async delete(id: number): Promise<boolean> {
        const result = await this.categoryRespository.delete(id);
        return result.affected != null && result.affected > 0;
    }
}