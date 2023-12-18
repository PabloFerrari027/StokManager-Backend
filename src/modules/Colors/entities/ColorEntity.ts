import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface IColor {
  id: UniqueEntityID;
  name: string;
  SKUPrefix: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class ColorEntity extends Entity<IColor> {
  get name() {
    return this.props.name;
  }

  get SKUPrefix() {
    return this.props.SKUPrefix;
  }
}
