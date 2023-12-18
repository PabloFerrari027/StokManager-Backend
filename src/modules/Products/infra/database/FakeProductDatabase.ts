import ICreateProductDTO from "modules/Products/DTOs/ICreateProductDTO";
import IDeleteProductDTO from "modules/Products/DTOs/IDeleteProductDTO";
import IFindProductDTO from "modules/Products/DTOs/IFindProductDTO";
import IListProductsDTO from "modules/Products/DTOs/IListProductsDTO";
import IUpdateProductDTO from "modules/Products/DTOs/IUpdateProductDTO";
import ProductEntity from "modules/Products/entities/ProductEntity";

import IProductsRepository from "modules/Products/repositories/IProductsRepository";

export default class FakeProductDatabase implements IProductsRepository {
  public products: ProductEntity[] = [];

  public async create({ data }: ICreateProductDTO) {
    this.products.push(data);

    return data;
  }

  public async update({ data }: IUpdateProductDTO) {
    const index = this.products.findIndex((i) => i.id === data.id);

    this.products[index] = data;

    return data;
  }

  public async findById({ id }: IFindProductDTO) {
    const product = this.products.find((i) => i.id === id) || null;

    return product;
  }

  public async list({ skip = 0, take = 10 }: IListProductsDTO) {
    return this.products.slice(skip, take);
  }

  public async delete({ id }: IDeleteProductDTO) {
    const index = this.products.findIndex((i) => i.id === id);
    this.products.splice(index, 1);
  }
}
