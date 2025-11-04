import { ProductModel } from "src/models/product.model";
import { AbstractRepository } from "./AbstractRepository";

export interface IProductRepository extends AbstractRepository<ProductModel> {}