import { beforeEach, describe, expect, it } from "vitest";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";
import FindCategoryBySKUPrefix from "./FindCategoryBySKUPrefix";
import CategoryEntity from "../entities/CategoryEntity";

const container = new Container();
let findCategoryBySKUPrefix: FindCategoryBySKUPrefix;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  findCategoryBySKUPrefix = container.resolve(FindCategoryBySKUPrefix);
});

describe("Find Category By SKU Prefix", () => {
  it("Should find a category", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    await categoriesRepository.create({
      category,
    });

    const getCategory = await findCategoryBySKUPrefix.execute({
      SKUPrefix: category.SKUPrefix,
    });

    expect(getCategory.category).toEqual(category);
  });

  it("Should not find a category", async () => {
    const getCategory = await findCategoryBySKUPrefix.execute({
      SKUPrefix: "CA",
    });

    expect(getCategory.category).toEqual(null);
  });
});
