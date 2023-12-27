import Container from "shared/container";
import { inject, injectable } from "shared/container/decorators";

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

interface ICreateCategoryResponse {
  category: CategoryEntity;
}

@injectable()
export default class CreateCategory {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(data: ICreateCategory): Promise<ICreateCategoryResponse> {
    const category = CategoryEntity.create({
      ...data,
    });

    const container = new Container();

    const findCategoryByName = container.resolve(FindCategoryByName);

    const name = category.name;

    const getCategoryByName = await findCategoryByName.execute({ name });

    if (getCategoryByName.category) {
      throw new DuplicityErrorInCategoryName({ name });
    }

    const SKUPrefix = category.SKUPrefix;

    const findCategoryBySKUPrefix = container.resolve(FindCategoryBySKUPrefix);

    const getCategoryBySKUPrefix = await findCategoryBySKUPrefix.execute({
      SKUPrefix,
    });

    if (getCategoryBySKUPrefix.category) {
      throw new DuplicityErrorInCategorySKUPrefix({ SKUPrefix });
    }

    await this.categoriesRepository.create({ data: category });

    return { category };
  }
}
