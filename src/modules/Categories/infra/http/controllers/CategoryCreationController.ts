import { Request, Response } from "express";

import { z } from "zod";

import Container from "shared/Container";

import CreateCategory from "modules/Categories/useCases/CreateCategory";

import DuplicityErrorInCategoryName from "modules/Categories/useCases/errors/DuplicityErrorInCategoryName";
import DuplicityErrorInCategorySKUPrefix from "modules/Categories/useCases/errors/DuplicityErrorInCategorySKUPrefix";

export default class CategoryCreationController {
  async execute(req: Request, res: Response) {
    try {
      const zodSchema = z.object({
        SKUPrefix: z.string(),
        name: z.string(),
      });

      const zodResponse = zodSchema.safeParse(req.body);

      if (!zodResponse.success) {
        return res
          .status(406)
          .send(
            "Verifique se todos os dados estão preenchidos corretamente e tente novamente!",
          );
      }

      const { data } = zodResponse;

      const container = new Container();

      const createCategory = container.resolve<CreateCategory>(CreateCategory);

      const { category } = await createCategory.execute(data);

      return res.send({
        id: category.id,
        name: category.name,
        SKUPrefix: category.SKUPrefix,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      });
    } catch (error) {
      if (error instanceof DuplicityErrorInCategoryName) {
        return res.status(406).send(error.message);
      }

      if (error instanceof DuplicityErrorInCategorySKUPrefix) {
        return res.status(406).send(error.message);
      }

      let message = "";

      if (error instanceof Error) message = error.message;
      else message = `${error}`;

      return res
        .status(500)
        .send(`O seguinte erro inesperado aconteceu: \n${message}`);
    }
  }
}
