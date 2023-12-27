import CategoryEntity from "modules/Categories/entities/CategoryEntity";

import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";
import {
  ICreateCategory,
  IUpdateCategory,
  IFindCategoryByID,
  IFindCategoryByName,
  IFindCategoryBySKUPrefix,
  IListCategories,
  IDeleteCategory,
} from "modules/Categories/repositories/types";
import { injectable } from "shared/container/decorators";

@injectable()
export default class MockCategoriesRepository implements ICategoriesRepository {
  public categories: CategoryEntity[] = [];

  public async create({ data }: ICreateCategory) {
    this.categories.push(data);
  }

  public async update({ data }: IUpdateCategory) {
    const index = this.categories.findIndex((i) => i.id === data.id);

    this.categories[index] = data;
  }

  public async findByID({ id }: IFindCategoryByID) {
    const response = this.categories.find((i) => i.id === id) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findByName({
    name,
  }: IFindCategoryByName): Promise<CategoryEntity | null> {
    const response = this.categories.find((i) => i.name === name) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findBySKUPrefix({
    SKUPrefix,
  }: IFindCategoryBySKUPrefix): Promise<CategoryEntity | null> {
    const response =
      this.categories.find((i) => i.SKUPrefix === SKUPrefix) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async list({ skip = 0, take = 10 }: IListCategories) {
    return this.categories
      .slice(skip, take)
      .map((category) => CategoryEntity.create(category));
  }

  public async delete({ id }: IDeleteCategory) {
    const index = this.categories.findIndex((i) => i.id === id);
    this.categories.splice(index, 1);
  }
}
