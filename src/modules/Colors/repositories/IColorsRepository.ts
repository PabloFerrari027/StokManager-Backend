import ICreateColorDTO from "../DTOs/ICreateColorDTO";
import IDeleteColorDTO from "../DTOs/IDeleteColorDTO";
import IFindColorDTO from "../DTOs/IFindColorDTO";
import IListCategoriesDTO from "../DTOs/IListColorsDTO";
import IUpdateColorDTO from "../DTOs/IUpdateColorDTO";

import ColorEntity from "../entities/ColorEntity";

export default interface IColorsRepository {
  create(data: ICreateColorDTO): Promise<ColorEntity>;
  findById(data: IFindColorDTO): Promise<ColorEntity | null>;
  list(data: IListCategoriesDTO): Promise<ColorEntity[]>;
  update(data: IUpdateColorDTO): Promise<ColorEntity>;
  delete(data: IDeleteColorDTO): Promise<void>;
}
