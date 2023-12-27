import UserEntity from "modules/Users/entities/UserEntity";

import IUsersRepository from "modules/Users/repositories/IUsersRepository";
import {
  ICreateUser,
  IUpdateUser,
  IListUsers,
  IDeleteUser,
  IFindUserByID,
} from "modules/Users/repositories/types";

export default class FakeUserDatabase implements IUsersRepository {
  public users: UserEntity[] = [];

  public async create({ data }: ICreateUser) {
    this.users.push(data);

    return data;
  }

  public async update({ data }: IUpdateUser) {
    const index = this.users.findIndex((i) => i.id === data.id);

    this.users[index] = data;

    return data;
  }

  public async findByID({ id }: IFindUserByID) {
    const user = this.users.find((i) => i.id === id) || null;

    return user;
  }

  public async list({ skip = 0, take = 10 }: IListUsers) {
    return this.users.slice(skip, take);
  }

  public async delete({ id }: IDeleteUser) {
    const index = this.users.findIndex((i) => i.id === id);
    this.users.splice(index, 1);
  }
}
