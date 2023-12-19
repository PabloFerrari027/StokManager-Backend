import ICreateCategoryDTO from "modules/Categories/DTOs/ICreateCategoryDTO";
import IDeleteCategoryDTO from "modules/Categories/DTOs/IDeleteCategoryDTO";
import IFindCategoryByIDDTO from "modules/Categories/DTOs/IFindCategoryByIDDTO";
import IFindCategoryByNameDTO from "modules/Categories/DTOs/IFindCategoryByNameDTO";
import IFindCategoryBySKUPrefixDTO from "modules/Categories/DTOs/IFindCategoryBySKUPrefixDTO";
import IListCategoriesDTO from "modules/Categories/DTOs/IListCategoriesDTO";
import IUpdateCategoryDTO from "modules/Categories/DTOs/IUpdateCategoryDTO";
import CategoryEntity from "modules/Categories/entities/CategoryEntity";

import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

export default class FakeCategoryDatabase implements ICategoriesRepository {
  public categories: CategoryEntity[] = [];

  public async create({ data }: ICreateCategoryDTO) {
    this.categories.push(data);
    return data;
  }

  public async update({ data }: IUpdateCategoryDTO) {
    const index = this.categories.findIndex((i) => i.id === data.id);

    this.categories[index] = data;

    return data;
  }

  public async findById({ id }: IFindCategoryByIDDTO) {
    const category = this.categories.find((i) => i.id === id) || null;

    return category;
  }

  public async findByName({
    name,
  }: IFindCategoryByNameDTO): Promise<CategoryEntity | null> {
    const category = this.categories.find((i) => i.name === name) || null;

    return category;
  }

  public async findBySKUPrefix({
    SKUPrefix,
  }: IFindCategoryBySKUPrefixDTO): Promise<CategoryEntity | null> {
    const category =
      this.categories.find((i) => i.SKUPrefix === SKUPrefix) || null;

    return category;
  }

  public async list({ skip = 0, take = 10 }: IListCategoriesDTO) {
    return this.categories.slice(skip, take);
  }

  public async delete({ id }: IDeleteCategoryDTO) {
    const index = this.categories.findIndex((i) => i.id === id);
    this.categories.splice(index, 1);
  }
}
