import ICreateOrderDTO from "../DTOs/ICreateOrderDTO";
import IDeleteOrderDTO from "../DTOs/IDeleteOrderDTO";
import IFindOrderDTO from "../DTOs/IFindOrderDTO";
import IUpdateOrderDTO from "../DTOs/IUpdateOrderDTO";
import IListOrdersDTO from "../DTOs/IListOrdersDTO";

import OrderEntity from "../entities/OrderEntity";

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<OrderEntity>;
  findById(data: IFindOrderDTO): Promise<OrderEntity | null>;
  list(data: IListOrdersDTO): Promise<OrderEntity[]>;
  update(data: IUpdateOrderDTO): Promise<OrderEntity>;
  delete(data: IDeleteOrderDTO): Promise<void>;
}
