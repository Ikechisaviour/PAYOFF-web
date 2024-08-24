import { z } from "zod";

export const contactSchema = z.object({
  body: z
    .string()
    .min(3, { message: "message must have at least three characters " })
    .max(20, {
      message: "firstname must not be greater than 20 characters",
    }),
  name: z
    .string()
    .min(3, { message: "name must have at least three characters " })
    .max(20, {
      message: "name must not be greater than 20 characters",
    }),
  email: z.string().email("This is not a valid email.").trim(),
});

export const subscribeSchema = z.object({
  emailAddress: z.string().email("This is not a valid email.").trim(),
});
