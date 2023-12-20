import { Router } from "express";

import CategoryCreationController from "../controllers/CategoryCreationController";

import Container from "shared/Container";

export const categoriesRouter = Router();

const container = new Container();

const categoryCreationController =
  container.resolve<CategoryCreationController>(CategoryCreationController);

categoriesRouter.post("/", categoryCreationController.execute);
categoriesRouter.get("/by/id/:id");
categoriesRouter.get("/");
categoriesRouter.put("/");
categoriesRouter.delete("/by/id/:id");
