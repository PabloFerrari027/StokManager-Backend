import { injectable } from "shared/container/decorators";

import MakeCategoriesRepository from "modules/Categories/infra/factories/MakeCategoriesRepository";
import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

interface IMakeAllRepositories {
  stage?: "test" | "production";
}

@injectable()
export default class MakeAllRepositories {
  protected _categoriesRepository: ICategoriesRepository;

  constructor(props?: IMakeAllRepositories) {
    const makeCategoriesRepository = new MakeCategoriesRepository();

    const categoriesRepository = makeCategoriesRepository.execute(props?.stage);

    this._categoriesRepository = categoriesRepository;
  }

  get categoriesRepository(): ICategoriesRepository {
    return this._categoriesRepository;
  }
}

new MakeAllRepositories();
