import ICreateOrderDTO from "modules/Orders/DTOs/ICreateOrderDTO";
import IDeleteOrderDTO from "modules/Orders/DTOs/IDeleteOrderDTO";
import IFindOrderDTO from "modules/Orders/DTOs/IFindOrderDTO";
import IListOrdersDTO from "modules/Orders/DTOs/IListOrdersDTO";
import IUpdateOrderDTO from "modules/Orders/DTOs/IUpdateOrderDTO";
import OrderEntity from "modules/Orders/entities/OrderEntity";

import IOrdersRepository from "modules/Orders/repositories/IOrdersRepository";

export default class FakeOrderDatabase implements IOrdersRepository {
  public orders: OrderEntity[] = [];

  public async create({ data }: ICreateOrderDTO) {
    this.orders.push(data);

    return data;
  }

  public async update({ data }: IUpdateOrderDTO) {
    const index = this.orders.findIndex((i) => i.id === data.id);

    this.orders[index] = data;

    return data;
  }

  public async findById({ id }: IFindOrderDTO) {
    const order = this.orders.find((i) => i.id === id) || null;

    return order;
  }

  public async list({ skip = 0, take = 10 }: IListOrdersDTO) {
    return this.orders.slice(skip, take);
  }

  public async delete({ id }: IDeleteOrderDTO) {
    const index = this.orders.findIndex((i) => i.id === id);
    this.orders.splice(index, 1);
  }
}
