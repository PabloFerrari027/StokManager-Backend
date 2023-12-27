import SupplierEntity from "../entities/SupplierEntity";
import {
  ICreateSupplier,
  IFindSupplier,
  IListSuppliers,
  IUpdateSupplier,
  IDeleteSupplier,
} from "./types";

export default interface ISuppliersRepository {
  create(data: ICreateSupplier): Promise<SupplierEntity>;
  findByID(data: IFindSupplier): Promise<SupplierEntity | null>;
  list(data: IListSuppliers): Promise<SupplierEntity[]>;
  update(data: IUpdateSupplier): Promise<SupplierEntity>;
  delete(data: IDeleteSupplier): Promise<void>;
}
