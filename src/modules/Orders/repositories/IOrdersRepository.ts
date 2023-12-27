import OrderEntity from "../entities/OrderEntity";

import {
  ICreateOrder,
  IFindOrderByID,
  IListOrders,
  IUpdateOrder,
  IDeleteOrder,
} from "./types";

export default interface IOrdersRepository {
  create(data: ICreateOrder): Promise<OrderEntity>;
  findByID(data: IFindOrderByID): Promise<OrderEntity | null>;
  list(data: IListOrders): Promise<OrderEntity[]>;
  update(data: IUpdateOrder): Promise<OrderEntity>;
  delete(data: IDeleteOrder): Promise<void>;
}
