import { inject, injectable } from "tsyringe";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface IFindCategoryByName {
  name: string;
}

@injectable()
export default class FindCategoryByName {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name }: IFindCategoryByName) {
    const getCategoryByName = await this.categoriesRepository.findByName({
      name,
    });

    return getCategoryByName;
  }
}
