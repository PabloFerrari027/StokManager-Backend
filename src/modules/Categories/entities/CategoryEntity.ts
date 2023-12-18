import Entity from "shared/entities/Entity";

interface ICategoryEntity {
  id: string;
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
