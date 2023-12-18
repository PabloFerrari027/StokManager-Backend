import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface ISaleEntity {
  id: UniqueEntityID;
  productId: UniqueEntityID;
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
