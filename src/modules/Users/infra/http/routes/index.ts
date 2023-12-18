import { Router } from "express";

export const usersRouter = Router();

usersRouter.post("/");
usersRouter.post("/login");
usersRouter.get("/by/id/:id");
usersRouter.get("/");
usersRouter.put("/");
usersRouter.delete("/by/id/:id");
