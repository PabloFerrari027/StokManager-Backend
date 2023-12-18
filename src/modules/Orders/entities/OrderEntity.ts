import Entity from "shared/entities/Entity";

interface IOrderEntity {
  id: string;
  productId: string;
  supplierId: string;
  status: "orderned" | "received" | "canceled";
  notes: string;
  targetDate: Date;
  orderDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default class OrderEntity extends Entity<IOrderEntity> {
  get productId() {
    return this.props.productId;
  }

  get supplierId() {
    return this.props.supplierId;
  }

  get status() {
    return this.props.status;
  }

  get notes() {
    return this.props.notes;
  }

  get targetDate() {
    return this.props.targetDate;
  }

  get orderDate() {
    return this.props.orderDate;
  }
}
