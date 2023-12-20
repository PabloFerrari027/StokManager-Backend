import ICreateCategoryDTO from "../DTOs/ICreateCategoryDTO";
import IDeleteCategoryDTO from "../DTOs/IDeleteCategoryDTO";
import IFindCategoryByIDDTO from "../DTOs/IFindCategoryByIDDTO";
import IFindCategoryByNameDTO from "../DTOs/IFindCategoryByNameDTO";
import IFindCategoryBySKUPrefixDTO from "../DTOs/IFindCategoryBySKUPrefixDTO";
import IListCategoriesDTO from "../DTOs/IListCategoriesDTO";
import IUpdateCategoryDTO from "../DTOs/IUpdateCategoryDTO";

import CategoryEntity from "../entities/CategoryEntity";

export default interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;

  findById(data: IFindCategoryByIDDTO): Promise<CategoryEntity | null>;

  findByName(data: IFindCategoryByNameDTO): Promise<CategoryEntity | null>;

  findBySKUPrefix(
    data: IFindCategoryBySKUPrefixDTO,
  ): Promise<CategoryEntity | null>;

  list(data: IListCategoriesDTO): Promise<CategoryEntity[]>;

  update(data: IUpdateCategoryDTO): Promise<void>;

  delete(data: IDeleteCategoryDTO): Promise<void>;
}
