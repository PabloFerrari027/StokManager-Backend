import { Router } from "express";

export const suppliersRouter = Router();

suppliersRouter.post("/");
suppliersRouter.get("/by/id/:id");
suppliersRouter.get("/");
suppliersRouter.put("/");
suppliersRouter.delete("/by/id/:id");
