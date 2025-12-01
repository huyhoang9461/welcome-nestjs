import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('category')
export class CategoryEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    categoryName?: string;

    @Column()
    description?: string;

    @OneToMany(() => ProductEntity, (products) => products.category )
    products?: ProductEntity[];
}