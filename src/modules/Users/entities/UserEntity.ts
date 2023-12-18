import Entity from "shared/entities/Entity";

interface IUserEntity {
  id: string;
  email: string;
  password: string;
  provider: "credentials" | "google";
  role: "string";
  createdAt: Date;
  updatedAt: Date;
}

export default class UserEntity extends Entity<IUserEntity> {
  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get provider() {
    return this.props.provider;
  }

  get role() {
    return this.props.role;
  }
}
