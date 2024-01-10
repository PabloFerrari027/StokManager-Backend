import "reflect-metadata";
import Container from "shared/container";
import { injectable } from "shared/container/decorators";

import MockCategoriesRepository from "modules/Categories/infra/databases/MockCategoriesRepository";
import CategoriesRepository from "../databases/CategoriesRepository";
import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";

@injectable()
export default class MakeCategoriesRepository {
  protected repository: ICategoriesRepository | null;

  constructor() {
    this.repository = null;
  }

  execute(stage: "test" | "production" = "production"): ICategoriesRepository {
    switch (stage) {
      case "test": {
        const container = new Container();

        const mockCategoriesRepository = container.resolve(
          MockCategoriesRepository,
        );

        container.register({
          token: "CategoriesRepository",
          instance: mockCategoriesRepository,
        });

        this.repository = container.resolve(MockCategoriesRepository);

        break;
      }

      case "production": {
        const container = new Container();

        const categoriesRepository = container.resolve(CategoriesRepository);

        container.register({
          token: "CategoriesRepository",
          instance: categoriesRepository,
        });

        this.repository = container.resolve(CategoriesRepository);

        break;
      }

      default:
        throw new Error("Unsupported");
    }

    return this.repository;
  }
}
