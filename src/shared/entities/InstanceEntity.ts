import { container } from "tsyringe";

interface IRegister {
  token: string;
}

export default class InstanceEntity<T> {
  protected instance: T;

  constructor(instance: T) {
    this.instance = instance;
  }

  get getInstance() {
    return this.instance;
  }

  register({ token }: IRegister) {
    container.registerInstance<T>(token, this.instance);
  }
}
