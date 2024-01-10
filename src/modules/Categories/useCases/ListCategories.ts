import { inject, injectable } from "shared/container/decorators";
import CategoryEntity from "../entities/CategoryEntity";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface IListCategories {
  take?: number;
  skip?: number;
}

interface IListCategoriesResponse {
  categories: CategoryEntity[];
}

@injectable()
export default class ListCategories {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(
    data?: IListCategories,
  ): Promise<IListCategoriesResponse> {
    const categories = await this.categoriesRepository.list(data);
    return { categories };
  }
}
