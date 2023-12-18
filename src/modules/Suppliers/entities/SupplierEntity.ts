import Entity from "shared/entities/Entity";

interface ISupplierEntity {
  id: string;
  name: string;
  email: string;
  message: string;
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class SupplierEntity extends Entity<ISupplierEntity> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get message() {
    return this.props.message;
  }

  get accessToken() {
    return this.props.accessToken;
  }
}
