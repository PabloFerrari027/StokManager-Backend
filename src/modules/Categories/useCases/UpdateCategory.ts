import Container from "shared/container";
import { inject, injectable } from "shared/container/decorators";

import CategoryEntity from "../entities/CategoryEntity";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

import DuplicityErrorInCategoryName from "./errors/DuplicityErrorInCategoryName";
import DuplicityErrorInCategorySKUPrefix from "./errors/DuplicityErrorInCategorySKUPrefix";

import FindCategoryByName from "./FindCategoryByName";
import FindCategoryBySKUPrefix from "./FindCategoryBySKUPrefix";
import FindCategoryByID from "./FindCategoryByID";
import CategoryNotFoundError from "./errors/CategoryNotFoundError";

interface IUpdateCategory {
  id: string;
  SKUPrefix?: string;
  name?: string;
}

interface IUpdateCategoryResponse {
  category: CategoryEntity;
}

@injectable()
export default class UpdateCategory {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({
    id,
    ...data
  }: IUpdateCategory): Promise<IUpdateCategoryResponse> {
    const container = new Container();

    const findCategoryByID = container.resolve(FindCategoryByID);

    const getCategory = await findCategoryByID.execute({ id });

    if (!getCategory.category) {
      throw new CategoryNotFoundError({ id });
    }

    const category = new CategoryEntity(
      {
        name: data.name || getCategory.category.name,
        SKUPrefix: data.SKUPrefix || getCategory.category.SKUPrefix,
        createdAt: getCategory.category.createdAt,
        updatedAt: new Date(),
      },
      id,
    );

    const findCategoryByName = container.resolve(FindCategoryByName);

    if (data.name) {
      const name = category.name;

      const getCategoryByName = await findCategoryByName.execute({ name });

      if (getCategoryByName.category) {
        throw new DuplicityErrorInCategoryName({ name });
      }
    }

    if (data.SKUPrefix) {
      const SKUPrefix = category.SKUPrefix;

      const findCategoryBySKUPrefix = container.resolve(
        FindCategoryBySKUPrefix,
      );

      const getCategoryBySKUPrefix = await findCategoryBySKUPrefix.execute({
        SKUPrefix,
      });

      if (getCategoryBySKUPrefix.category) {
        throw new DuplicityErrorInCategorySKUPrefix({ SKUPrefix });
      }
    }

    await this.categoriesRepository.update({ category });

    return { category };
  }
}
