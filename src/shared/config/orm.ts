import { PrismaClient } from "@prisma/client";
import { env } from "./env";

const postgre = new PrismaClient({
  datasources: { db: { url: env.POSTGRESQL_DATABASE_URL } },
});

const orm = {
  postgre,
};

export default orm;
