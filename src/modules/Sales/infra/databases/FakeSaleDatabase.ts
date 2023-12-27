import SaleEntity from "modules/Sales/entities/SaleEntity";

import ISalesRepository from "modules/Sales/repositories/ISalesRepository";
import {
  ICreateSale,
  IUpdateSale,
  IListSales,
  IDeleteSale,
  IFindSaleByID,
} from "modules/Sales/repositories/types";

export default class FakeSaleDatabase implements ISalesRepository {
  public sales: SaleEntity[] = [];

  public async create({ data }: ICreateSale) {
    this.sales.push(data);

    return data;
  }

  public async update({ data }: IUpdateSale) {
    const index = this.sales.findIndex((i) => i.id === data.id);

    this.sales[index] = data;

    return data;
  }

  public async findByID({ id }: IFindSaleByID) {
    const sale = this.sales.find((i) => i.id === id) || null;

    return sale;
  }

  public async list({ skip = 0, take = 10 }: IListSales) {
    return this.sales.slice(skip, take);
  }

  public async delete({ id }: IDeleteSale) {
    const index = this.sales.findIndex((i) => i.id === id);
    this.sales.splice(index, 1);
  }
}
