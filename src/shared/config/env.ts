import "dotenv/config";
import CustomError from "shared/utils/CustomError";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string()
});

const envResolver = envSchema.safeParse(process.env);

if (!envResolver.success) {
  const message = `It seems that there was an error when trying to read the environment variables: \n ${envResolver.error.message}`;
  throw CustomError.InternalServerError({ message });
}

export const env = envResolver.data;
