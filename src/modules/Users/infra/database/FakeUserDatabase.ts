import ICreateUserDTO from "modules/Users/DTOs/ICreateUserDTO";
import IDeleteUserDTO from "modules/Users/DTOs/IDeleteUserDTO";
import IFindUserDTO from "modules/Users/DTOs/IFindUserDTO";
import IListUsersDTO from "modules/Users/DTOs/IListUsersDTO";
import IUpdateUserDTO from "modules/Users/DTOs/IUpdateUserDTO";
import UserEntity from "modules/Users/entities/UserEntity";

import IUsersRepository from "modules/Users/repositories/IUsersRepository";

export default class FakeUserDatabase implements IUsersRepository {
  public users: UserEntity[] = [];

  public async create({ data }: ICreateUserDTO) {
    this.users.push(data);

    return data;
  }

  public async update({ data }: IUpdateUserDTO) {
    const index = this.users.findIndex((i) => i.id === data.id);

    this.users[index] = data;

    return data;
  }

  public async findById({ id }: IFindUserDTO) {
    const user = this.users.find((i) => i.id === id) || null;

    return user;
  }

  public async list({ skip = 0, take = 10 }: IListUsersDTO) {
    return this.users.slice(skip, take);
  }

  public async delete({ id }: IDeleteUserDTO) {
    const index = this.users.findIndex((i) => i.id === id);
    this.users.splice(index, 1);
  }
}
