import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email("This is not a valid email.")
    .trim(),
  password: z
    .string({
      required_error: "secret is required",
      invalid_type_error: "secret must be a string",
    })
    .min(3, { message: "secret must be at least 8 characters" })
    .max(50, {
      message: "The secret can't accept more than 50 characters",
    })
    .refine(
      (value) =>
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value),
      "Password should contain at least One Uppercase letter, Lowercase letter,numbers and special charcters"
    ),
});
