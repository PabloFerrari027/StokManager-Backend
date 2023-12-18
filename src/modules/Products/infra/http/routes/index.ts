import { Router } from "express";

export const productsRouter = Router();

productsRouter.post("/");
productsRouter.get("/by/id/:id");
productsRouter.get("/by/sku/:sku");
productsRouter.get("/trend/by/id/:id");
productsRouter.get("/");
productsRouter.get("/bests");
productsRouter.put("/");
productsRouter.delete("/by/id/:id");
