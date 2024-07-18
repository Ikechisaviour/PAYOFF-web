import { z } from "zod";

export const OtpSchema = z.object({
  pin: z
    .string({
      required_error: "pin is required",
      invalid_type_error: "pin must be a string",
    })
    .min(6, {
      message: "Your one-time pin must be 6 characters.",
    }),
});
