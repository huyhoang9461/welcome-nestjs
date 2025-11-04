export abstract class AbstractRepository<T> {
    abstract findAll(): Promise<T[]>;
    abstract findById(id: number): Promise<T | null>;
    abstract create(data: T): Promise<T>;
    abstract update(id: number, data: Partial<T>): Promise<T | null>;
    abstract delete(id: number): Promise<boolean>;
}
