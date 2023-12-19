import { inject, injectable } from "tsyringe";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface IFindCategoryBySKUPrefix {
  SKUPrefix: string;
}

@injectable()
export default class FindCategoryBySKUPrefix {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ SKUPrefix }: IFindCategoryBySKUPrefix) {
    const getCategoryByName = await this.categoriesRepository.findBySKUPrefix({
      SKUPrefix,
    });

    return getCategoryByName;
  }
}
