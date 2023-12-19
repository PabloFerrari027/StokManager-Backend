import { Request, Response } from "express";
import CreateCategory from "modules/Categories/useCases/CreateCategory";
import { container } from "tsyringe";
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

      const createCategory = container.resolve(CreateCategory);

      const category = await createCategory.execute(data);

      return res.json(category);
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
