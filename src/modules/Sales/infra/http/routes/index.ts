import { Router } from "express";

export const salesRouter = Router();

salesRouter.post("/");
salesRouter.get("/by/id/:id");
salesRouter.get("/");
salesRouter.get("/by/time");
salesRouter.put("/");
salesRouter.delete("/by/id/:id");
