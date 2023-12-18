import ICreateColorDTO from "modules/Colors/DTOs/ICreateColorDTO";
import IDeleteColorDTO from "modules/Colors/DTOs/IDeleteColorDTO";
import IFindColorDTO from "modules/Colors/DTOs/IFindColorDTO";
import IListColorsDTO from "modules/Colors/DTOs/IListColorsDTO";
import IUpdateColorDTO from "modules/Colors/DTOs/IUpdateColorDTO";
import ColorEntity from "modules/Colors/entities/ColorEntity";

import IColorsRepository from "modules/Colors/repositories/IColorsRepository";

export default class FakeColorDatabase implements IColorsRepository {
  public colors: ColorEntity[] = [];

  public async create({ data }: ICreateColorDTO) {
    this.colors.push(data);

    return data;
  }

  public async update({ data }: IUpdateColorDTO) {
    const index = this.colors.findIndex((i) => i.id === data.id);

    this.colors[index] = data;

    return data;
  }

  public async findById({ id }: IFindColorDTO) {
    const color = this.colors.find((i) => i.id === id) || null;

    return color;
  }

  public async list({ skip = 0, take = 10 }: IListColorsDTO) {
    return this.colors.slice(skip, take);
  }

  public async delete({ id }: IDeleteColorDTO) {
    const index = this.colors.findIndex((i) => i.id === id);
    this.colors.splice(index, 1);
  }
}
