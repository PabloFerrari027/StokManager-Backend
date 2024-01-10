import "reflect-metadata";
import { InjectionToken, container } from "tsyringe";

interface IRegister<T> {
  token: string;
  instance: T;
}

export default class Container {
  register<T>({ token, instance }: IRegister<T>) {
    container.registerInstance(token, instance);
  }

  resolve<T>(injection: InjectionToken<T>) {
    return container.resolve<T>(injection);
  }

  clear() {
    container.clearInstances();
  }
}
