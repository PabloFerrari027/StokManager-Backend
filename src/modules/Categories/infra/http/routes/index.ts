import { Router } from "express";

import { container } from "tsyringe";

import CategoryCreationController from "../controllers/CategoryCreationController";

export const categoriesRouter = Router();

const categoryCreationController = container.resolve(
  CategoryCreationController,
);

categoriesRouter.post("/", categoryCreationController.execute);
categoriesRouter.get("/by/id/:id");
categoriesRouter.get("/");
categoriesRouter.put("/");
categoriesRouter.delete("/by/id/:id");
