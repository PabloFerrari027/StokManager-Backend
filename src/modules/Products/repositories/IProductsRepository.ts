import ICreateProductDTO from "../DTOs/ICreateProductDTO";
import IDeleteProductDTO from "../DTOs/IDeleteProductDTO";
import IFindProductDTO from "../DTOs/IFindProductDTO";
import IUpdateProductDTO from "../DTOs/IUpdateProductDTO";
import IListProductsDTO from "../DTOs/IListProductsDTO";

import ProductEntity from "../entities/ProductEntity";

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<ProductEntity>;
  findById(data: IFindProductDTO): Promise<ProductEntity | null>;
  list(data: IListProductsDTO): Promise<ProductEntity[]>;
  update(data: IUpdateProductDTO): Promise<ProductEntity>;
  delete(data: IDeleteProductDTO): Promise<void>;
}
