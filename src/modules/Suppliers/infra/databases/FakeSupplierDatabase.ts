import SupplierEntity from "modules/Suppliers/entities/SupplierEntity";

import ISuppliersRepository from "modules/Suppliers/repositories/ISuppliersRepository";

import {
  ICreateSupplier,
  IUpdateSupplier,
  IFindSupplier,
  IListSuppliers,
  IDeleteSupplier,
} from "modules/Suppliers/repositories/types";

export default class FakeSupplierDatabase implements ISuppliersRepository {
  public suppliers: SupplierEntity[] = [];

  public async create({ data }: ICreateSupplier) {
    this.suppliers.push(data);

    return data;
  }

  public async update({ data }: IUpdateSupplier) {
    const index = this.suppliers.findIndex((i) => i.id === data.id);

    this.suppliers[index] = data;

    return data;
  }

  public async findByID({ id }: IFindSupplier) {
    const supplier = this.suppliers.find((i) => i.id === id) || null;

    return supplier;
  }

  public async list({ skip = 0, take = 10 }: IListSuppliers) {
    return this.suppliers.slice(skip, take);
  }

  public async delete({ id }: IDeleteSupplier) {
    const index = this.suppliers.findIndex((i) => i.id === id);
    this.suppliers.splice(index, 1);
  }
}
