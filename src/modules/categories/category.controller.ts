import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { ResponseData } from "src/global/globalClass";
import { CategoryService } from "./category.service";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { CategoryModel } from "src/models/category.model";
import { CategoryDto } from "src/dto/category.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async getAll(): Promise<ResponseData<CategoryModel[]>> {
        try {
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
        try {
            return new ResponseData<CategoryModel>(
                await this.categoryService.createCategory(categoryDto),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<CategoryModel>(
                null as any,
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }

    @Get('/:id')
    async getDetailCategory(@Param('id') id: number): Promise<ResponseData<CategoryModel | null>> {
        try {
            return new ResponseData<CategoryModel | null>(
                await this.categoryService.getCategoryById(id),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<CategoryModel | null>(
                await this.categoryService.getCategoryById(id),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }

    @Put('/:id')
    async updateCategory(@Param('id') id: number, @Body() categoryDto: CategoryDto): Promise<ResponseData<CategoryModel | null>> {
        try {
            return new ResponseData<CategoryModel | null>(
                await this.categoryService.update(id, categoryDto),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<CategoryModel | null>(
                await this.categoryService.update(id, categoryDto),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }

    @Delete('/:id')
    async deleteCategory(@Param('id') id: number): Promise<ResponseData<boolean>> {
        try {
            return new ResponseData<boolean>(
                await this.categoryService.delete(id),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<boolean>(
                await this.categoryService.delete(id),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }

    @Get("/relations/:id")
    async findRelationsById(@Param('id') id: number, @Res() res: Response){
        try {
            return new ResponseData<boolean>(
                await this.categoryService.delete(id),
                HttpStatus.SUCCESS,
                HttpMessage.SUCCESS,
            );
        } catch (error) {
            return new ResponseData<boolean>(
                await this.categoryService.delete(id),
                HttpStatus.ERROR,
                HttpMessage.ERROR,
            );
        }
    }
}