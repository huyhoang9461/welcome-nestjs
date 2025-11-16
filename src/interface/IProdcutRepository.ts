import { ProductModel } from "src/models/product.model";
import { InterfaceRepository } from "./InterfaceRepository";

export interface IProductRepository extends InterfaceRepository<ProductModel> { }