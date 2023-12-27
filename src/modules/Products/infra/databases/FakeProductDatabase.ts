import ProductEntity from "modules/Products/entities/ProductEntity";

import IProductsRepository from "modules/Products/repositories/IProductsRepository";

import {
  ICreateProduct,
  IUpdateProduct,
  IFindProduct,
  IListProducts,
  IDeleteProduct,
} from "modules/Products/repositories/types";

export default class FakeProductDatabase implements IProductsRepository {
  public products: ProductEntity[] = [];

  public async create({ data }: ICreateProduct) {
    this.products.push(data);

    return data;
  }

  public async update({ data }: IUpdateProduct) {
    const index = this.products.findIndex((i) => i.id === data.id);

    this.products[index] = data;

    return data;
  }

  public async findByID({ id }: IFindProduct) {
    const product = this.products.find((i) => i.id === id) || null;

    return product;
  }

  public async list({ skip = 0, take = 10 }: IListProducts) {
    return this.products.slice(skip, take);
  }

  public async delete({ id }: IDeleteProduct) {
    const index = this.products.findIndex((i) => i.id === id);
    this.products.splice(index, 1);
  }
}
