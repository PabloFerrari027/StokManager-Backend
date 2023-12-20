import { Optional } from "shared/@types/optional";
import Entity from "shared/entities/Entity";

interface ICategoryEntity {
  SKUPrefix: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

type CreateCategoryEntity = Optional<
  ICategoryEntity,
  "createdAt" | "updatedAt"
>;

export default class CategoryEntity extends Entity<ICategoryEntity> {
  get SKUPrefix() {
    return this.props.SKUPrefix;
  }

  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: CreateCategoryEntity) {
    const category = new CategoryEntity({
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return category;
  }
}
