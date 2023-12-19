import InstanceEntity from "shared/entities/InstanceEntity";
import { InjectionToken, container } from "tsyringe";

interface IInstanceRegistrationFactory<T> {
  token: string;
  instance: InjectionToken<T>;
}

export default class InstanceRegistrationFactory {
  execute<T>(data: IInstanceRegistrationFactory<T>) {
    const instance = new InstanceEntity<T>(container.resolve(data.instance));

    instance.register({ token: data.token });

    return instance.getInstance;
  }
}
