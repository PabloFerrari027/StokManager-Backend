import SaleEntity from "../entities/SaleEntity";

import {
  ICreateSale,
  IListSales,
  IUpdateSale,
  IDeleteSale,
  IFindSaleByID,
} from "./types";

export default interface ISalesRepository {
  create(data: ICreateSale): Promise<SaleEntity>;
  findByID(data: IFindSaleByID): Promise<SaleEntity | null>;
  list(data: IListSales): Promise<SaleEntity[]>;
  update(data: IUpdateSale): Promise<SaleEntity>;
  delete(data: IDeleteSale): Promise<void>;
}
