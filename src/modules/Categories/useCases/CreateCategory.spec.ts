import { beforeEach, describe, expect, it } from "vitest";

import MakeCategoriesRepository from "../infra/factories/MakeCategoriesRepository";

import CreateCategory from "./CreateCategory";
import Container from "shared/Container";
import CategoryEntity from "../entities/CategoryEntity";
import FindCategoryByID from "./FindCategoryByID";

let container: Container;
let createCategory: CreateCategory;
let findCategoryByID: FindCategoryByID;

beforeEach(() => {
  container = new Container();

  const makeCategoriesRepository = container.resolve(MakeCategoriesRepository);

  makeCategoriesRepository.execute("test");

  createCategory = container.resolve(CreateCategory);
  findCategoryByID = container.resolve(FindCategoryByID);
});

describe("Category creation use case ", () => {
  it("Should not create a category with an existing name", async () => {
    const { category } = await createCategory.execute({
      name: "Category",
      SKUPrefix: "CA",
    });

    const getCategory = await findCategoryByID.execute({ id: category.id });

    expect(getCategory.category).toEqual(category);
  });

  it("Should not edit a category with an existing name", async () => {});

  it("Should not create a category with existing SKU's prefix", async () => {});

  it("Should not edit a category with existing SKU's prefix", async () => {});

  it("Should not edit a nonexistent category", async () => {});

  it("Should not delete a nonexistent category", async () => {});
});
