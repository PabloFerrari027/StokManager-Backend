import { Router } from "express";

import { categoriesRouter } from "modules/Categories/infra/http/routes";
import { colorsRouter } from "modules/Colors/infra/http/routes";
import { notificationsRouter } from "modules/Notifications/infra/http/routes";
import { ordersRouter } from "modules/Orders/infra/http/routes";
import { productsRouter } from "modules/Products/infra/http/routes";
import { salesRouter } from "modules/Sales/infra/http/routes";
import { suppliersRouter } from "modules/Suppliers/infra/http/routes";
import { usersRouter } from "modules/Users/infra/http/routes";

export const router = Router();

router.use("/categories", categoriesRouter);
router.use("/colors", colorsRouter);
router.use("/notifications", notificationsRouter);
router.use("/products", productsRouter);
router.use("/suppliers", suppliersRouter);
router.use("/users", usersRouter);
router.use("/sales", salesRouter);
router.use("/orders", ordersRouter);
