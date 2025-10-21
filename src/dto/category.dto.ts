import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CategoryDto {
    id?: number;
    
    @ApiProperty()
    @MinLength(5, {message: "Category name must be at least 5 characters long"})
    categoryName?: string;

    @ApiProperty()
    description?: string;
}