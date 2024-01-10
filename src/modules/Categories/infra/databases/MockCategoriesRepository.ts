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
import { singleton } from "shared/container/decorators";

@singleton()
export default class MockCategoriesRepository implements ICategoriesRepository {
  protected categories: CategoryEntity[] = [];

  public async create({ category }: ICreateCategory) {
    this.categories.push(category);
  }

  public async update({ category }: IUpdateCategory) {
    const index = this.categories.findIndex((i) => i.id === category.id);

    this.categories[index] = category;
  }

  public async findByID(params: IFindCategoryByID) {
    const response = this.categories.find((i) => i.id === params.id) || null;

    if (!response) return null;

    const { id, SKUPrefix, createdAt, name, updatedAt } = response;

    const category = new CategoryEntity(
      {
        SKUPrefix,
        createdAt,
        name,
        updatedAt,
      },
      id,
    );

    return category;
  }

  public async findByName(
    params: IFindCategoryByName,
  ): Promise<CategoryEntity | null> {
    const response =
      this.categories.find((i) => i.name === params.name) || null;

    if (!response) return null;

    const { id, SKUPrefix, createdAt, name, updatedAt } = response;

    const category = new CategoryEntity(
      {
        SKUPrefix,
        createdAt,
        name,
        updatedAt,
      },
      id,
    );

    return category;
  }

  public async findBySKUPrefix(
    params: IFindCategoryBySKUPrefix,
  ): Promise<CategoryEntity | null> {
    const response =
      this.categories.find((i) => i.SKUPrefix === params.SKUPrefix) || null;

    if (!response) return null;

    const { id, SKUPrefix, createdAt, name, updatedAt } = response;

    const category = new CategoryEntity(
      {
        SKUPrefix,
        createdAt,
        name,
        updatedAt,
      },
      id,
    );

    return category;
  }

  public async list(data?: IListCategories) {
    let skip = data?.skip || 0;

    if (skip >= this.categories.length) skip = skip - 10;

    const take = skip + (data?.take || 10);

    return this.categories.slice(skip, take).map(
      ({ SKUPrefix, createdAt, id, name, updatedAt }) =>
        new CategoryEntity(
          {
            SKUPrefix,
            createdAt,
            name,
            updatedAt,
          },
          id,
        ),
    );
  }

  public async delete({ id }: IDeleteCategory) {
    const index = this.categories.findIndex((i) => i.id === id);
    this.categories.splice(index, 1);
  }
}
