import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface ICategoryEntity {
  id: UniqueEntityID;
  SKUPrefix: string;
  name: string;
  createdAt: Date;
  upadatedAt: Date;
}

export default class CategoryEntity extends Entity<ICategoryEntity> {
  get SKUPrefix() {
    return this.props.SKUPrefix;
  }

  get name() {
    return this.props.name;
  }
}
