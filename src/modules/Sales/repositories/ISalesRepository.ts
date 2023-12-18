import ICreateSaleDTO from "../DTOs/ICreateSaleDTO";
import IDeleteSaleDTO from "../DTOs/IDeleteSaleDTO";
import IFindSaleDTO from "../DTOs/IFindSaleDTO";
import IUpdateSaleDTO from "../DTOs/IUpdateSaleDTO";
import IListSalesDTO from "../DTOs/IListSalesDTO";

import SaleEntity from "../entities/SaleEntity";

export default interface ISalesRepository {
  create(data: ICreateSaleDTO): Promise<SaleEntity>;
  findById(data: IFindSaleDTO): Promise<SaleEntity | null>;
  list(data: IListSalesDTO): Promise<SaleEntity[]>;
  update(data: IUpdateSaleDTO): Promise<SaleEntity>;
  delete(data: IDeleteSaleDTO): Promise<void>;
}
