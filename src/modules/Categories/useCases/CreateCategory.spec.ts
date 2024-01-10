import { beforeEach, describe, expect, it } from "vitest";

import MakeCategoriesRepository from "../infra/factories/MakeCategoriesRepository";

import CreateCategory from "./CreateCategory";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import DuplicityErrorInCategoryName from "./errors/DuplicityErrorInCategoryName";
import DuplicityErrorInCategorySKUPrefix from "./errors/DuplicityErrorInCategorySKUPrefix";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";

const container = new Container();
let createCategory: CreateCategory;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  createCategory = container.resolve(CreateCategory);
});

describe("Category creation use case ", () => {
  it("Should not create a category with an existing name", async () => {
    const makeCategoriesRepository = container.resolve(
      MakeCategoriesRepository,
    );

    makeCategoriesRepository.execute("test");

    const { category } = await createCategory.execute({
      name: "Category",
      SKUPrefix: "CA",
    });

    const getCategory = await categoriesRepository.findByID({
      id: category.id,
    });

    expect(getCategory).toEqual(category);
  });

  it("Should not edit a category with an existing name", async () => {
    const makeCategoriesRepository = container.resolve(
      MakeCategoriesRepository,
    );

    makeCategoriesRepository.execute("test");

    await createCategory.execute({
      name: "Category",
      SKUPrefix: "CA",
    });

    await expect(() =>
      createCategory.execute({
        name: "Category",
        SKUPrefix: "CB",
      }),
    ).rejects.toBeInstanceOf(DuplicityErrorInCategoryName);
  });

  it("Should not create a category with existing SKU's prefix", async () => {
    const makeCategoriesRepository = container.resolve(
      MakeCategoriesRepository,
    );

    makeCategoriesRepository.execute("test");

    await createCategory.execute({
      name: "Category 1",
      SKUPrefix: "CA",
    });

    await expect(() =>
      createCategory.execute({
        name: "Category 2",
        SKUPrefix: "CA",
      }),
    ).rejects.toBeInstanceOf(DuplicityErrorInCategorySKUPrefix);
  });

  it("Should not edit a category with existing SKU's prefix", async () => {});

  it("Should not edit a nonexistent category", async () => {});

  it("Should not delete a nonexistent category", async () => {});
});
