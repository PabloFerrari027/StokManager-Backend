import UserEntity from "../entities/UserEntity";
import {
  ICreateUser,
  IListUsers,
  IUpdateUser,
  IDeleteUser,
  IFindUserByID,
} from "./types";

export default interface IUsersRepository {
  create(data: ICreateUser): Promise<UserEntity>;
  findByID(data: IFindUserByID): Promise<UserEntity | null>;
  list(data: IListUsers): Promise<UserEntity[]>;
  update(data: IUpdateUser): Promise<UserEntity>;
  delete(data: IDeleteUser): Promise<void>;
}
