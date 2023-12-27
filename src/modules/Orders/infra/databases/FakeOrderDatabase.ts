import OrderEntity from "modules/Orders/entities/OrderEntity";

import IOrdersRepository from "modules/Orders/repositories/IOrdersRepository";
import {
  ICreateOrder,
  IUpdateOrder,
  IListOrders,
  IDeleteOrder,
  IFindOrderByID,
} from "modules/Orders/repositories/types";

export default class FakeOrderDatabase implements IOrdersRepository {
  public orders: OrderEntity[] = [];

  public async create({ data }: ICreateOrder) {
    this.orders.push(data);

    return data;
  }

  public async update({ data }: IUpdateOrder) {
    const index = this.orders.findIndex((i) => i.id === data.id);

    this.orders[index] = data;

    return data;
  }

  public async findByID({ id }: IFindOrderByID) {
    const order = this.orders.find((i) => i.id === id) || null;

    return order;
  }

  public async list({ skip = 0, take = 10 }: IListOrders) {
    return this.orders.slice(skip, take);
  }

  public async delete({ id }: IDeleteOrder) {
    const index = this.orders.findIndex((i) => i.id === id);
    this.orders.splice(index, 1);
  }
}
