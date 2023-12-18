import { Router } from "express";

export const categoriesRouter = Router();

categoriesRouter.post("/");
categoriesRouter.get("/by/id/:id");
categoriesRouter.get("/");
categoriesRouter.put("/");
categoriesRouter.delete("/by/id/:id");
