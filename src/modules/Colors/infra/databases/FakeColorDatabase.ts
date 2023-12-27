import ColorEntity from "modules/Colors/entities/ColorEntity";

import IColorsRepository from "modules/Colors/repositories/IColorsRepository";

import {
  ICreateColor,
  IUpdateColor,
  IFindColorByID,
  IDeleteColor,
  IListColors,
} from "modules/Colors/repositories/types";

export default class FakeColorDatabase implements IColorsRepository {
  public colors: ColorEntity[] = [];

  public async create({ data }: ICreateColor) {
    this.colors.push(data);

    return data;
  }

  public async update({ data }: IUpdateColor) {
    const index = this.colors.findIndex((i) => i.id === data.id);

    this.colors[index] = data;

    return data;
  }

  public async findByID({ id }: IFindColorByID) {
    const color = this.colors.find((i) => i.id === id) || null;

    return color;
  }

  public async list({ skip = 0, take = 10 }: IListColors) {
    return this.colors.slice(skip, take);
  }

  public async delete({ id }: IDeleteColor) {
    const index = this.colors.findIndex((i) => i.id === id);
    this.colors.splice(index, 1);
  }
}
