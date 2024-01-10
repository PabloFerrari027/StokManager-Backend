import { inject, injectable } from "shared/container/decorators";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import CategoryNotFoundError from "./errors/CategoryNotFoundError";

interface IDeleteCategory {
  id: string;
}

@injectable()
export default class DeleteCategory {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ id }: IDeleteCategory): Promise<void> {
    const category = await this.categoriesRepository.findByID({ id });

    if (!category) throw new CategoryNotFoundError({ id });

    await this.categoriesRepository.delete({ id });
  }
}
