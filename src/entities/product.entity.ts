import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    price: number;

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    @JoinColumn({ name: 'categoryId', referencedColumnName: 'id' })
    category: CategoryEntity;
}