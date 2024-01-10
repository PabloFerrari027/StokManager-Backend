import { beforeEach, describe, expect, it } from "vitest";

import UpdateCategory from "./UpdateCategory";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import DuplicityErrorInCategoryName from "./errors/DuplicityErrorInCategoryName";
import DuplicityErrorInCategorySKUPrefix from "./errors/DuplicityErrorInCategorySKUPrefix";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";
import CategoryEntity from "../entities/CategoryEntity";
import { randomUUID } from "crypto";
import CategoryNotFoundError from "./errors/CategoryNotFoundError";

const container = new Container();
let updateCategory: UpdateCategory;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  updateCategory = container.resolve(UpdateCategory);
});

describe("Update Category", () => {
  it("Should update a category", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await categoriesRepository.create({
      category,
    });

    const { category: updateResponse } = await updateCategory.execute({
      id: category.id,
      name: "New Name",
    });

    const getCategory = await categoriesRepository.findByID({
      id: category.id,
    });

    expect(getCategory?.name).toEqual(updateResponse.name);
  });

  it("Should not edit a category with an existing name", async () => {
    const category1 = new CategoryEntity({
      name: "Category 1",
      SKUPrefix: "C1",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const category2 = new CategoryEntity({
      name: "Category 2",
      SKUPrefix: "C2",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await categoriesRepository.create({
      category: category1,
    });

    await categoriesRepository.create({
      category: category2,
    });

    await expect(() =>
      updateCategory.execute({
        id: category1.id,
        name: category2.name,
      }),
    ).rejects.toBeInstanceOf(DuplicityErrorInCategoryName);
  });

  it("Should not edit a category with existing SKU's prefix", async () => {
    const category1 = new CategoryEntity({
      name: "Category 1",
      SKUPrefix: "C1",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const category2 = new CategoryEntity({
      name: "Category 2",
      SKUPrefix: "C2",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await categoriesRepository.create({
      category: category1,
    });

    await categoriesRepository.create({
      category: category2,
    });

    await expect(() =>
      updateCategory.execute({
        id: category1.id,
        SKUPrefix: category2.SKUPrefix,
      }),
    ).rejects.toBeInstanceOf(DuplicityErrorInCategorySKUPrefix);
  });

  it("Should trigger an error when trying to update a nonexistent category", async () => {
    await expect(() =>
      updateCategory.execute({
        id: randomUUID(),
      }),
    ).rejects.toBeInstanceOf(CategoryNotFoundError);
  });
});
