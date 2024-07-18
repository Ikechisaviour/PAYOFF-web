import { z } from "zod";

export const OtpSchema = z.object({
  otp: z
    .string({
      required_error: "otp is required",
      invalid_type_error: "otp must be a string",
    })
    .min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
});
