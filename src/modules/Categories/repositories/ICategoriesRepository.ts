import ICreateCategoryDTO from "../DTOs/ICreateCategoryDTO";
import IDeleteCategoryDTO from "../DTOs/IDeleteCategoryDTO";
import IFindCategoryDTO from "../DTOs/IFindCategoryDTO";
import IListCategoriesDTO from "../DTOs/IListCategoriesDTO";
import IUpdateCategoryDTO from "../DTOs/IUpdateCategoryDTO";

import CategoryEntity from "../entities/CategoryEntity";

export default interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<CategoryEntity>;
  findById(data: IFindCategoryDTO): Promise<CategoryEntity | null>;
  list(data: IListCategoriesDTO): Promise<CategoryEntity[]>;
  update(data: IUpdateCategoryDTO): Promise<CategoryEntity>;
  delete(data: IDeleteCategoryDTO): Promise<void>;
}
