import ColorEntity from "../entities/ColorEntity";
import {
  ICreateColor,
  IFindColorByID,
  IListColors,
  IUpdateColor,
  IDeleteColor,
} from "./types";

export default interface IColorsRepository {
  create(data: ICreateColor): Promise<ColorEntity>;
  findByID(data: IFindColorByID): Promise<ColorEntity | null>;
  list(data?: IListColors): Promise<ColorEntity[]>;
  update(data: IUpdateColor): Promise<ColorEntity>;
  delete(data: IDeleteColor): Promise<void>;
}
