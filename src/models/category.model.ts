export class CategoryModel {
    id?: number;
    categoryName?: string;
    description?: string;

    constructor({ id, categoryName, description }) {
        if (id !== null) this.id = id;
        if (categoryName !== null) this.categoryName = categoryName;
        if (description !== null) this.description = description;
    }
}