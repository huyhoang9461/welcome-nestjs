import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('category')
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryName: string;

    @Column()
    description: string;

    @OneToMany(() => Product, (products) => products.category )
    products: Product[];
}