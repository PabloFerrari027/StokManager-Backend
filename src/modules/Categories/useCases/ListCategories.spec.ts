import { beforeEach, describe, expect, it } from "vitest";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";
import ListCategories from "./ListCategories";
import CategoryEntity from "../entities/CategoryEntity";

const container = new Container();
let listCategories: ListCategories;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  listCategories = container.resolve(ListCategories);
});

describe("List Categories", () => {
  it("Should list the categories", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    await categoriesRepository.create({
      category,
    });

    const { categories } = await listCategories.execute();

    expect(categories.length).toEqual(1);
  });

  it("Should pay the category listing", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    const count = 15;

    for (let i = 0; i < count; i++) {
      await categoriesRepository.create({
        category,
      });
    }

    const { categories } = await listCategories.execute({ take: count - 5 });

    expect(categories.length).toEqual(10);
  });

  it("Should return to the last valid listing if you enter a skip greater than the number of existing categories", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    const count = 15;

    for (let i = 0; i < count; i++) {
      await categoriesRepository.create({
        category,
      });
    }

    const { categories } = await listCategories.execute({ skip: count + 5 });

    expect(categories.length).toEqual(5);
  });
});
