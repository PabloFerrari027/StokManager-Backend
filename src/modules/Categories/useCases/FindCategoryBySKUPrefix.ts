import { inject, injectable } from "shared/container/decorators";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

import CategoryEntity from "../entities/CategoryEntity";

interface IFindCategoryBySKUPrefix {
  SKUPrefix: string;
}

interface IFindCategoryBySKUPrefixResponse {
  category: CategoryEntity | null;
}

@injectable()
export default class FindCategoryBySKUPrefix {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({
    SKUPrefix,
  }: IFindCategoryBySKUPrefix): Promise<IFindCategoryBySKUPrefixResponse> {
    const category = await this.categoriesRepository.findBySKUPrefix({
      SKUPrefix,
    });

    return { category };
  }
}
