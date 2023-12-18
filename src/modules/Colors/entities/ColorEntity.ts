import Entity from "shared/entities/Entity";

interface IColor {
  id: string;
  name: string;
  SKUPrefix: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class Color extends Entity<IColor> {
  get name() {
    return this.props.name;
  }

  get SKUPrefix() {
    return this.props.SKUPrefix;
  }
}
