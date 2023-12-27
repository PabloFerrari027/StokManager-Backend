import { inject, injectable } from "shared/container/decorators";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

import CategoryEntity from "../entities/CategoryEntity";

interface IFindCategoryByID {
  id: string;
}

interface IFindCategoryByIDResponse {
  category: CategoryEntity | null;
}

@injectable()
export default class FindCategoryByID {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id }: IFindCategoryByID): Promise<IFindCategoryByIDResponse> {
    const category = await this.categoriesRepository.findByID({
      id,
    });

    return { category };
  }
}
