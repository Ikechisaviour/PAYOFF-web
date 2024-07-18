import { emailSchema } from "@/validators/auth/generate-otp-form";

import { redirect } from "next/navigation";

export async function subscribe(state: any, formData: FormData) {
  const validationResult = emailSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validationResult.success) {
    return {
      success: "",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  return {
    success: "Thanks for subscribing, check your email",
  };
}
