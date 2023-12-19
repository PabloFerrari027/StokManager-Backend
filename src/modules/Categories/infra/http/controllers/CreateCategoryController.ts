import { Request, Response } from "express";
import CategoryEntity from "modules/Categories/entities/CategoryEntity";
import ICategoriesRepository from "modules/Categories/repositories/ICategoriesRepository";
import UniqueEntityID from "shared/entities/UniqueEntityID";
import { z } from "zod";

export default class CreateCategoryController {
  constructor(private categoriesRepository: ICategoriesRepository) {}

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

      const category = CategoryEntity.create({
        ...data,
      });

      await this.categoriesRepository.create({ data: category });
    } catch (error) {}
  }
}
