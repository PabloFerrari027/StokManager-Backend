import ICreateSupplierDTO from "modules/Suppliers/DTOs/ICreateSupplierDTO";
import IDeleteSupplierDTO from "modules/Suppliers/DTOs/IDeleteSupplierDTO";
import IFindSupplierDTO from "modules/Suppliers/DTOs/IFindSupplierDTO";
import IListSuppliersDTO from "modules/Suppliers/DTOs/IListSuppliersDTO";
import IUpdateSupplierDTO from "modules/Suppliers/DTOs/IUpdateSupplierDTO";
import SupplierEntity from "modules/Suppliers/entities/SupplierEntity";

import ISuppliersRepository from "modules/Suppliers/repositories/ISuppliersRepository";

export default class FakeSupplierDatabase implements ISuppliersRepository {
  public suppliers: SupplierEntity[] = [];

  public async create({ data }: ICreateSupplierDTO) {
    this.suppliers.push(data);

    return data;
  }

  public async update({ data }: IUpdateSupplierDTO) {
    const index = this.suppliers.findIndex((i) => i.id === data.id);

    this.suppliers[index] = data;

    return data;
  }

  public async findById({ id }: IFindSupplierDTO) {
    const supplier = this.suppliers.find((i) => i.id === id) || null;

    return supplier;
  }

  public async list({ skip = 0, take = 10 }: IListSuppliersDTO) {
    return this.suppliers.slice(skip, take);
  }

  public async delete({ id }: IDeleteSupplierDTO) {
    const index = this.suppliers.findIndex((i) => i.id === id);
    this.suppliers.splice(index, 1);
  }
}
