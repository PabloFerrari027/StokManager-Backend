import { beforeEach, describe, expect, it } from "vitest";
import Container from "shared/container";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import MakeAllRepositories from "shared/infra/factories/MakeAllRepositories";
import DeleteCategory from "./DeleteCategory";
import CategoryEntity from "../entities/CategoryEntity";
import { randomUUID } from "crypto";
import CategoryNotFoundError from "./errors/CategoryNotFoundError";

const container = new Container();
let deleteCategory: DeleteCategory;
let categoriesRepository: ICategoriesRepository;
let makeAllRepositories: MakeAllRepositories;

beforeEach(() => {
  container.clear();

  makeAllRepositories = new MakeAllRepositories({ stage: "test" });

  categoriesRepository = makeAllRepositories.categoriesRepository;

  deleteCategory = container.resolve(DeleteCategory);
});

describe("Delete Category", () => {
  it("should exclude a category", async () => {
    const category = new CategoryEntity({
      name: "Category",
      SKUPrefix: "CA",
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    await categoriesRepository.create({
      category,
    });

    await deleteCategory.execute({
      id: category.id,
    });

    const categories = await categoriesRepository.list();

    expect(categories.length).toEqual(0);
  });

  it("Should trigger an error when trying to delete a nonexistent category", async () => {
    await expect(() =>
      deleteCategory.execute({
        id: randomUUID(),
      }),
    ).rejects.toBeInstanceOf(CategoryNotFoundError);
  });
});
