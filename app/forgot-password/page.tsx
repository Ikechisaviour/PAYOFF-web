import { Metadata } from "next";
import ForgotPasswordForm from "@/components/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot",
  description: "Please enter your email",
};
export default function ResetPasswordPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Forgot Password
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          We&apos;ve got you, please input your email.
        </p>
        <ForgotPasswordForm />
      </div>
    </section>
  );
}
