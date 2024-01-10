import CategoryEntity from "../entities/CategoryEntity";
import {
  ICreateCategory,
  IFindCategoryByID,
  IFindCategoryByName,
  IFindCategoryBySKUPrefix,
  IListCategories,
  IUpdateCategory,
  IDeleteCategory,
} from "./types";

export default interface ICategoriesRepository {
  create(data: ICreateCategory): Promise<void>;

  findByID(data: IFindCategoryByID): Promise<CategoryEntity | null>;

  findByName(data: IFindCategoryByName): Promise<CategoryEntity | null>;

  findBySKUPrefix(
    data: IFindCategoryBySKUPrefix,
  ): Promise<CategoryEntity | null>;

  list(data?: IListCategories): Promise<CategoryEntity[]>;

  update(data: IUpdateCategory): Promise<void>;

  delete(data: IDeleteCategory): Promise<void>;
}
