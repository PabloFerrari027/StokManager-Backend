import Entity from "shared/entities/Entity";

interface IProductEntity {
  id: string;
  SKUMain: string;
  SKUVariant: string;
  categoryId: string;
  supplierId: string;
  colorId: string;
  name: string;
  expense: number;
  price: number;
  size: number;
  limit: number;
  quantityOrderned: number;
  soldAmount: number;
  stock: number;
  repurchase: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default class ProductEntity extends Entity<IProductEntity> {
  get SKUMain() {
    return this.props.SKUMain;
  }

  get SKUVariant() {
    return this.props.SKUVariant;
  }

  get categoryId() {
    return this.props.categoryId;
  }

  get supplierId() {
    return this.props.supplierId;
  }

  get colorId() {
    return this.props.colorId;
  }

  get name() {
    return this.props.name;
  }

  get expense() {
    return this.props.expense;
  }

  get price() {
    return this.props.price;
  }

  get size() {
    return this.props.size;
  }

  get limit() {
    return this.props.limit;
  }

  get quantityOrderned() {
    return this.props.quantityOrderned;
  }

  get soldAmount() {
    return this.props.soldAmount;
  }

  get stock() {
    return this.props.stock;
  }

  get repurchase() {
    return this.props.repurchase;
  }
}
