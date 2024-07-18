import { z } from "zod";
import { phoneValidation } from "./generate-otp-form";

export const genders = ["male", "female"] as const;

export const PasswordSchema = z
  .object({
    password: z
      .string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
      })
      .min(3, { message: "password must be at least 8 characters" })
      .max(50, {
        message: "The password can't accept more than 50 characters",
      })
      .refine(
        (value) =>
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value),
        "Password should contain at least One Uppercase letter, Lowercase letter,numbers and special charcters"
      ),
    confirmpassword: z
      .string()
      .min(8, { message: "password must be at least 8 characters" })
      .max(50, {
        message: "The password can't accept more than 50 characters",
      }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });

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
  middleName: z
    .string()
    .min(3, { message: "middle name must have at least three characters " })
    .max(20, {
      message: "middle name must not be greater than 20 characters",
    })
    .optional(),
  email: z.string().email("This is not a valid email.").trim(),
  houseNumber: z.number().positive(),
  streetName: z
    .string()
    .min(3, { message: "streetName must have at least three characters " }),
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
  // state: z
  //   .string()
  //   .min(3, { message: "state must have at least three characters " }),
  // localGovernment: z.string().min(3, {
  //   message: "localGovernment must have at least three characters ",
  // }),
  // gender: z.enum(genders),
});
