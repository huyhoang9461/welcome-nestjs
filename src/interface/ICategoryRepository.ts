import { CategoryModel } from "src/models/category.model";
import { InterfaceRepository } from "./InterfaceRepository";

export interface ICategoryRepository extends InterfaceRepository<CategoryModel> {
    findRelationsById(id: number): Promise<CategoryModel | null>;
}