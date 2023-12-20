import { Request, Response } from "express";
import CreateCategory from "modules/Categories/useCases/CreateCategory";
import Container from "shared/Container";
import { z } from "zod";

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
      let message = "";

      if (error instanceof Error) message = error.message;
      else message = `${error}`;

      return res
        .status(500)
        .send(`O seguinte erro inesperado aconteceu: \n${message}`);
    }
  }
}
