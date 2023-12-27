import { inject, injectable } from "shared/container/decorators";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

import CategoryEntity from "../entities/CategoryEntity";

interface IFindCategoryByName {
  name: string;
}

interface IFindCategoryByNameResponse {
  category: CategoryEntity | null;
}

@injectable()
export default class FindCategoryByName {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({
    name,
  }: IFindCategoryByName): Promise<IFindCategoryByNameResponse> {
    const category = await this.categoriesRepository.findByName({
      name,
    });

    return { category };
  }
}
