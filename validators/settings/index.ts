import { z } from "zod";
import { phoneValidation } from "../auth/generate-otp-form";
import { genders } from "../auth/signup"
export const InfoSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstname must have at least three characters " })
    .max(20, {
      message: "firstname must not be greater than 20 characters",
    }),
  lastName: z
    .string()
    .min(3, { message: "lastname must have at least three characters " })
    .max(20, {
      message: "lastname must not be greater than 20 characters",
    }),
  email: z.string().email("This is not a valid email.").trim(),
  dateOfBirth: z
    .string()
    .refine((date) => /^\d{4}-\d{2}-\d{2}$/.test(date), {
      message: "Invalid date format. Please use YYYY-MM-DD.",
    })
    .refine(
      (date) => {
        const currentDate = new Date();
        const selectedDate = new Date(date);
        selectedDate.setFullYear(selectedDate.getFullYear() + 18);
        return selectedDate <= currentDate;
      },
      {
        message: "You must be at least 18 years old to open an account.",
      }
    ),
  phoneNumber: phoneValidation,
  gender: z.enum(genders),
});
