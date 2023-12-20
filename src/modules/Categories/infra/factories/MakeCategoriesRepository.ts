import "reflect-metadata";
import Container from "shared/Container";
import { injectable } from "shared/Container/decorators";

import MockCategoriesRepository from "modules/Categories/infra/database/MockCategoriesRepository";
import CategoriesRepository from "../database/CategoriesRepository";

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
