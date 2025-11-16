import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class CategoryDto {
    id?: number;
    
    @ApiProperty()
    @IsString()
    @MinLength(5, {message: "Category name must be at least 5 characters long"})
    categoryName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;
}