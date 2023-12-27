import ProductEntity from "../entities/ProductEntity";
import {
  ICreateProduct,
  IFindProduct,
  IListProducts,
  IUpdateProduct,
  IDeleteProduct,
} from "./types";

export default interface IProductsRepository {
  create(data: ICreateProduct): Promise<ProductEntity>;
  findByID(data: IFindProduct): Promise<ProductEntity | null>;
  list(data: IListProducts): Promise<ProductEntity[]>;
  update(data: IUpdateProduct): Promise<ProductEntity>;
  delete(data: IDeleteProduct): Promise<void>;
}
