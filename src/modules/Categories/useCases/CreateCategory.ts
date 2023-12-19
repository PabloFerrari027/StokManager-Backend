import { container, inject, injectable } from "tsyringe";

import CategoryEntity from "../entities/CategoryEntity";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

import DuplicityErrorInCategoryName from "./errors/DuplicityErrorInCategoryName";
import DuplicityErrorInCategorySKUPrefix from "./errors/DuplicityErrorInCategorySKUPrefix";

import FindCategoryByName from "./FindCategoryByName";
import FindCategoryBySKUPrefix from "./FindCategoryBySKUPrefix";

interface ICreateCategory {
  SKUPrefix: string;
  name: string;
}

@injectable()
export default class CreateCategory {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(data: ICreateCategory) {
    const category = CategoryEntity.create({
      ...data,
    });

    const findCategoryByName = container.resolve(FindCategoryByName);

    const name = category.name;

    const getCategoryByName = await findCategoryByName.execute({ name });

    if (getCategoryByName) {
      throw new DuplicityErrorInCategoryName({ name });
    }

    const SKUPrefix = category.SKUPrefix;

    const findCategoryBySKUPrefix = container.resolve(FindCategoryBySKUPrefix);

    const getCategoryBySKUPrefix = await findCategoryBySKUPrefix.execute({
      SKUPrefix,
    });

    if (getCategoryBySKUPrefix) {
      throw new DuplicityErrorInCategorySKUPrefix({ SKUPrefix });
    }

    await this.categoriesRepository.create({ data: category });
  }
}
