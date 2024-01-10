import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

import CategoryEntity from "modules/Categories/entities/CategoryEntity";

import orm from "shared/config/orm";

import { injectable } from "tsyringe";

import {
  ICreateCategory,
  IUpdateCategory,
  IFindCategoryByID,
  IFindCategoryByName,
  IFindCategoryBySKUPrefix,
  IListCategories,
  IDeleteCategory,
} from "modules/Categories/repositories/types";

@injectable()
export default class CategoriesRepository implements ICategoriesRepository {
  public async create({ data }: ICreateCategory) {
    await orm.postgre.categories.create({
      data: {
        id: data.id,
        name: data.name,
        SKUPrefix: data.SKUPrefix,
      },
    });
  }

  public async update({ data }: IUpdateCategory) {
    await orm.postgre.categories.update({
      data: {
        name: data.name,
        SKUPrefix: data.SKUPrefix,
      },
      where: { id: data.id },
    });
  }

  public async findByID({ id }: IFindCategoryByID) {
    const response = await orm.postgre.categories.findUnique({ where: { id } });

    if (!response) return null;

    const { id: _, ...data } = response;

    const category = new CategoryEntity(data, id);

    return category;
  }

  public async findByName({
    name,
  }: IFindCategoryByName): Promise<CategoryEntity | null> {
    const response = await orm.postgre.categories.findUnique({
      where: { name },
    });

    if (!response) return null;

    const { id, ...data } = response;

    const category = new CategoryEntity(data, id);

    return category;
  }

  public async findBySKUPrefix({
    SKUPrefix,
  }: IFindCategoryBySKUPrefix): Promise<CategoryEntity | null> {
    const response = await orm.postgre.categories.findUnique({
      where: { SKUPrefix },
    });

    if (!response) return null;

    const { id, ...data } = response;

    const category = new CategoryEntity(data, id);

    return category;
  }

  public async list({ skip = 0, take = 100 }: IListCategories) {
    const response = await orm.postgre.categories.findMany({ take, skip });

    const categories = response.map(
      ({ id, ...data }) => new CategoryEntity(data, id),
    );

    return categories;
  }

  public async delete({ id }: IDeleteCategory) {
    await orm.postgre.categories.delete({ where: { id: id } });
  }
}
