import { beforeEach, describe, expect, it } from "vitest";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";
import FindCategoryByID from "./FindCategoryByID";
import CategoryEntity from "../entities/CategoryEntity";
import { randomUUID } from "crypto";

const container = new Container();
let findCategoryByID: FindCategoryByID;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  findCategoryByID = container.resolve(FindCategoryByID);
});

describe("Find Category By ID", () => {
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

    const getCategory = await findCategoryByID.execute({
      id: category.id,
    });

    expect(getCategory.category).toEqual(category);
  });

  it("Should not find a category", async () => {
    const getCategory = await findCategoryByID.execute({
      id: randomUUID(),
    });

    expect(getCategory.category).toEqual(null);
  });
});
