import { NextFunction, Request, Response } from "express";

export default class verifyRole {
  isAdmin(req: Request, res: Response, next: NextFunction) {
    const role = req.user.role;

    if (!role || role !== "admin") {
      const message = "You are not allowed to access this service!";
      return res.status(403).send(message);
    }

    next();
  }

  isSupplier(req: Request, res: Response, next: NextFunction) {
    const role = req.user.role;

    if (!role || role !== "supplier") {
      const message = "You are not allowed to access this service!";
      return res.status(403).send(message);
    }

    next();
  }
}
