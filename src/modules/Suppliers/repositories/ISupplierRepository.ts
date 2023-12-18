import ICreateSupplierDTO from "../DTOs/ICreateSupplierDTO";
import IDeleteSupplierDTO from "../DTOs/IDeleteSupplierDTO";
import IFindSupplierDTO from "../DTOs/IFindSupplierDTO";
import IUpdateSupplierDTO from "../DTOs/IUpdateSupplierDTO";
import IListSuppliersDTO from "../DTOs/IListSupplierDTO";

import SupplierEntity from "../entities/SupplierEntity";

export default interface ISuppliersRepository {
  create(data: ICreateSupplierDTO): Promise<SupplierEntity>;
  findById(data: IFindSupplierDTO): Promise<SupplierEntity | null>;
  list(data: IListSuppliersDTO): Promise<SupplierEntity[]>;
  update(data: IUpdateSupplierDTO): Promise<SupplierEntity>;
  delete(data: IDeleteSupplierDTO): Promise<void>;
}
