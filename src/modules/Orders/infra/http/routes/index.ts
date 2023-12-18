import { Router } from "express";

export const ordersRouter = Router();

ordersRouter.post("/");
ordersRouter.get("/by/id/:id");
ordersRouter.get("/");
ordersRouter.get("/by/product/id/:id");
ordersRouter.put("/");
ordersRouter.delete("/by/id/:id");
