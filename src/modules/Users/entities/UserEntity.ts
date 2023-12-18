import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface IUserEntity {
  id: UniqueEntityID;
  email: string;
  password: string;
  provider: "credentials" | "google";
  role: string;
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
