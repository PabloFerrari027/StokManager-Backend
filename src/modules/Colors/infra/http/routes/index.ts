import { Router } from "express";

export const colorsRouter = Router();

colorsRouter.post("/");
colorsRouter.get("/by/id/:id");
colorsRouter.get("/");
colorsRouter.put("/");
colorsRouter.delete("/by/id/:id");
