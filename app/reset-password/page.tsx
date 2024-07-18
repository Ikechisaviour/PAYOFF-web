import { Metadata } from "next";
import ResetPasswordForm from "@/components/reset-password-form";

export const metadata: Metadata = {
  title: "Reset",
  description: "Please choose a new password for your account",
};
export default function ResetPasswordPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Reset Password
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          Please choose a new password for your account
        </p>
        <ResetPasswordForm />
      </div>
    </section>
  );
}
