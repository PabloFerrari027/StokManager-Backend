import { InjectionToken, container } from "tsyringe";

interface IRegister<T> {
  token: string;
  instance: InjectionToken<T>;
}

export default class Container {
  register<T>({ token, instance }: IRegister<T>) {
    container.registerType(token, instance);
  }

  resolve<T>(injection: InjectionToken<T>) {
    return container.resolve<T>(injection);
  }
}
