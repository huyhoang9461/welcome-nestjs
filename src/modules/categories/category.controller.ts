import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { ResponseData } from "src/global/globalClass";
import { CategoryService } from "./category.service";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { CategoryModel } from "src/models/category.model";
import { CategoryDto } from "src/dto/category.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async getAll(): Promise<ResponseData<CategoryModel[]>> {
        try{
            return new ResponseData<CategoryModel[]>(
                await this.categoryService.getAll(),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<CategoryModel[]>(
                await this.categoryService.getAll(),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }

    @Post()
    async createCategory(@Body() categoryDto: CategoryDto): Promise<ResponseData<CategoryModel>> {
        try{
            return new ResponseData<CategoryModel>(
                await this.categoryService.createCategory(categoryDto),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<CategoryModel>(
                await this.categoryService.createCategory(categoryDto),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }


}