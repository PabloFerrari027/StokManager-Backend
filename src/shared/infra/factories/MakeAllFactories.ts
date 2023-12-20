import Container from "../../Container";
import { injectable } from "shared/Container/decorators";

import MakeCategoriesRepository from "modules/Categories/infra/factories/MakeCategoriesRepository";

@injectable()
export default class MakeAllFactories {
  execute() {
    const makeCategoriesRepository = new MakeCategoriesRepository();
    makeCategoriesRepository.execute();
  }
}

const container = new Container();
container.resolve(MakeAllFactories).execute();
