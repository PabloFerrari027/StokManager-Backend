import { Router } from "express";

export const notificationsRouter = Router();

notificationsRouter.get("/");
notificationsRouter.delete("/by/id/:id");
