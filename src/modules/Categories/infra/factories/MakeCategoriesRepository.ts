import "reflect-metadata";
import Container from "shared/container";
import { injectable } from "shared/container/decorators";

import MockCategoriesRepository from "modules/Categories/infra/databases/MockCategoriesRepository";
import CategoriesRepository from "../databases/CategoriesRepository";

@injectable()
export default class MakeCategoriesRepository {
  execute(stage: "test" | "production" = "production") {
    switch (stage) {
      case "test": {
        const container = new Container();

        container.register({
          token: "CategoriesRepository",
          instance: MockCategoriesRepository,
        });

        break;
      }

      case "production": {
        const container = new Container();

        container.register({
          token: "CategoriesRepository",
          instance: CategoriesRepository,
        });

        break;
      }

      default:
        break;
    }

    return;
  }
}
