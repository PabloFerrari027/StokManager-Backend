import "reflect-metadata";
import "shared/register";
import express from "express";
import { router } from "./routes";

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
