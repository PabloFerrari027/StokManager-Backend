import ICreateUserDTO from "../DTOs/ICreateUserDTO";
import IDeleteUserDTO from "../DTOs/IDeleteUserDTO";
import IFindUserDTO from "../DTOs/IFindUserDTO";
import IUpdateUserDTO from "../DTOs/IUpdateUserDTO";
import IListUsersDTO from "../DTOs/IListUsersDTO";

import UserEntity from "../entities/UserEntity";

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<UserEntity>;
  findById(data: IFindUserDTO): Promise<UserEntity | null>;
  list(data: IListUsersDTO): Promise<UserEntity[]>;
  update(data: IUpdateUserDTO): Promise<UserEntity>;
  delete(data: IDeleteUserDTO): Promise<void>;
}
