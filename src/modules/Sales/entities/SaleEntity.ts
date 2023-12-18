import Entity from "shared/entities/Entity";

interface ISaleEntity {
  id: string;
  productId: string;
  price: number;
  soldAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export default class SaleEntity extends Entity<ISaleEntity> {
  get productId() {
    return this.props.productId;
  }

  get price() {
    return this.props.price;
  }

  get soldAmount() {
    return this.props.soldAmount;
  }
}
