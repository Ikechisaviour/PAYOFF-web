import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";



export const emailSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email("invalid email"),
});

export const phoneValidation = z
  .string({
    required_error: "phoneNumber is required",
    invalid_type_error: "phoneNumber must be a string",
  })
  .transform((arg, ctx) => {
    const phone = parsePhoneNumberFromString(arg, {
      // set this to use a default country when the phone number omits country code
      defaultCountry: "NG",

      // set to false to require that the whole string is exactly a phone number,
      // otherwise, it will search for a phone number anywhere within the string
      extract: false,
    });

    // when it's good
    if (phone && phone.isValid()) {
      return phone.number;
    }

    // when it's not
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid phone number",
    });
    return z.NEVER;
  });

export const phoneSchema = z.object({
  phoneNumber: phoneValidation,
});

// export const phoneSchema = z.object({
//   phoneNumber: z
//     .string({
//       required_error: "phoneNumber is required",
//       invalid_type_error: "phoneNumber must be a string",
//     })
//     .refine(validator.isMobilePhone),
// });
