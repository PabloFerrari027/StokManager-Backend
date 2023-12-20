import { injectable } from "shared/Container/decorators";

import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

import CategoryEntity from "modules/Categories/entities/CategoryEntity";

import orm from "shared/config/orm";

import ICreateCategoryDTO from "modules/Categories/DTOs/ICreateCategoryDTO";
import IDeleteCategoryDTO from "modules/Categories/DTOs/IDeleteCategoryDTO";
import IFindCategoryByIDDTO from "modules/Categories/DTOs/IFindCategoryByIDDTO";
import IFindCategoryByNameDTO from "modules/Categories/DTOs/IFindCategoryByNameDTO";
import IFindCategoryBySKUPrefixDTO from "modules/Categories/DTOs/IFindCategoryBySKUPrefixDTO";
import IListCategoriesDTO from "modules/Categories/DTOs/IListCategoriesDTO";
import IUpdateCategoryDTO from "modules/Categories/DTOs/IUpdateCategoryDTO";

@injectable()
export default class CategoriesRepository implements ICategoriesRepository {
  public async create({ data }: ICreateCategoryDTO) {
    await orm.postgre.categories.create({
      data: {
        id: data.id,
        name: data.name,
        SKUPrefix: data.SKUPrefix,
      },
    });
  }

  public async update({ data }: IUpdateCategoryDTO) {
    await orm.postgre.categories.update({
      data: {
        name: data.name,
        SKUPrefix: data.SKUPrefix,
      },
      where: { id: data.id },
    });
  }

  public async findById({ id }: IFindCategoryByIDDTO) {
    const response = await orm.postgre.categories.findUnique({ where: { id } });

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findByName({
    name,
  }: IFindCategoryByNameDTO): Promise<CategoryEntity | null> {
    const response = await orm.postgre.categories.findUnique({
      where: { name },
    });

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async findBySKUPrefix({
    SKUPrefix,
  }: IFindCategoryBySKUPrefixDTO): Promise<CategoryEntity | null> {
    const response = await orm.postgre.categories.findUnique({
      where: { SKUPrefix },
    });

    if (!response) return null;

    const category = CategoryEntity.create(response);

    return category;
  }

  public async list({ skip = 0, take = 100 }: IListCategoriesDTO) {
    const response = await orm.postgre.categories.findMany({ take, skip });

    const categories = response.map((category) => new CategoryEntity(category));

    return categories;
  }

  public async delete({ id }: IDeleteCategoryDTO) {
    await orm.postgre.categories.delete({ where: { id: id } });
  }
}
