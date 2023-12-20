import { injectable } from "shared/Container/decorators";

import CategoryEntity from "modules/Categories/entities/CategoryEntity";

import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

import ICreateCategoryDTO from "modules/Categories/DTOs/ICreateCategoryDTO";
import IDeleteCategoryDTO from "modules/Categories/DTOs/IDeleteCategoryDTO";
import IFindCategoryByIDDTO from "modules/Categories/DTOs/IFindCategoryByIDDTO";
import IFindCategoryByNameDTO from "modules/Categories/DTOs/IFindCategoryByNameDTO";
import IFindCategoryBySKUPrefixDTO from "modules/Categories/DTOs/IFindCategoryBySKUPrefixDTO";
import IListCategoriesDTO from "modules/Categories/DTOs/IListCategoriesDTO";
import IUpdateCategoryDTO from "modules/Categories/DTOs/IUpdateCategoryDTO";

@injectable()
export default class MockCategoriesRepository implements ICategoriesRepository {
  public categories: CategoryEntity[] = [];

  public async create({ data }: ICreateCategoryDTO) {
    this.categories.push(data);
  }

  public async update({ data }: IUpdateCategoryDTO) {
    const index = this.categories.findIndex((i) => i.id === data.id);

    this.categories[index] = data;
  }

  public async findById({ id }: IFindCategoryByIDDTO) {
    const response = this.categories.find((i) => i.id === id) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findByName({
    name,
  }: IFindCategoryByNameDTO): Promise<CategoryEntity | null> {
    const response = this.categories.find((i) => i.name === name) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findBySKUPrefix({
    SKUPrefix,
  }: IFindCategoryBySKUPrefixDTO): Promise<CategoryEntity | null> {
    const response =
      this.categories.find((i) => i.SKUPrefix === SKUPrefix) || null;

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async list({ skip = 0, take = 10 }: IListCategoriesDTO) {
    return this.categories
      .slice(skip, take)
      .map((category) => CategoryEntity.create(category));
  }

  public async delete({ id }: IDeleteCategoryDTO) {
    const index = this.categories.findIndex((i) => i.id === id);
    this.categories.splice(index, 1);
  }
}
