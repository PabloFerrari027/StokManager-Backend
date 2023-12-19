import { Optional } from "shared/@types/optional";
import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface ICategoryEntity {
  SKUPrefix: string;
  name: string;
  upadatedAt: Date;
  createdAt: Date;
}

type CreateCategoryEntity = Optional<
  ICategoryEntity,
  "createdAt" | "upadatedAt"
>;

export default class CategoryEntity extends Entity<ICategoryEntity> {
  get SKUPrefix() {
    return this.props.SKUPrefix;
  }

  get name() {
    return this.props.name;
  }

  static create(props: CreateCategoryEntity) {
    const category = new CategoryEntity({
      ...props,
      createdAt: new Date(),
      upadatedAt: new Date(),
    });

    return category;
  }
}
