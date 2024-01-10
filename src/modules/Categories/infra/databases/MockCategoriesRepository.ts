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

  public async create({ data }: ICreateCategory) {
    this.categories.push(data);
  }

  public async update({ data }: IUpdateCategory) {
    const index = this.categories.findIndex((i) => i.id === data.id);

    this.categories[index] = data;
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

  public async list({ skip = 0, take = 10 }: IListCategories) {
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
