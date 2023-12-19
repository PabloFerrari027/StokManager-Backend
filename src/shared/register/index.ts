import FakeCategoryDatabase from "modules/Categories/infra/database/FakeCategoryDatabase";
import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";
import InstanceRegistrationFactory from "shared/factories/InstanceRegistrationFactory";
import { container } from "tsyringe";

export default class RegisterDependencies {
  execute() {
    const instanceRegistrationFactory = container.resolve(
      InstanceRegistrationFactory,
    );

    instanceRegistrationFactory.execute<ICategoriesRepository>({
      instance: FakeCategoryDatabase,
      token: "CategoriesRepository",
    });
  }
}

const registerDependencies = container.resolve(RegisterDependencies);

registerDependencies.execute();
