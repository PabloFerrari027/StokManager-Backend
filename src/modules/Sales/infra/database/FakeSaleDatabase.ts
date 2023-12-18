import ICreateSaleDTO from "modules/Sales/DTOs/ICreateSaleDTO";
import IDeleteSaleDTO from "modules/Sales/DTOs/IDeleteSaleDTO";
import IFindSaleDTO from "modules/Sales/DTOs/IFindSaleDTO";
import IListSalesDTO from "modules/Sales/DTOs/IListSalesDTO";
import IUpdateSaleDTO from "modules/Sales/DTOs/IUpdateSaleDTO";
import SaleEntity from "modules/Sales/entities/SaleEntity";

import ISalesRepository from "modules/Sales/repositories/ISalesRepository";

export default class FakeSaleDatabase implements ISalesRepository {
  public sales: SaleEntity[] = [];

  public async create({ data }: ICreateSaleDTO) {
    this.sales.push(data);

    return data;
  }

  public async update({ data }: IUpdateSaleDTO) {
    const index = this.sales.findIndex((i) => i.id === data.id);

    this.sales[index] = data;

    return data;
  }

  public async findById({ id }: IFindSaleDTO) {
    const sale = this.sales.find((i) => i.id === id) || null;

    return sale;
  }

  public async list({ skip = 0, take = 10 }: IListSalesDTO) {
    return this.sales.slice(skip, take);
  }

  public async delete({ id }: IDeleteSaleDTO) {
    const index = this.sales.findIndex((i) => i.id === id);
    this.sales.splice(index, 1);
  }
}
