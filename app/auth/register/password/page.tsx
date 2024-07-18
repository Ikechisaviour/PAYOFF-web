import { Metadata } from "next";
import RegisterPasswordForm from "@/components/register-password-form";

export const metadata: Metadata = {
  title: "Add your basic information",
  description: "Please, provide a valid password",
};
export default function RegisterPasswordPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Create account password
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          Please, provide a secured and easy to remember password for easy login
          on all devices
        </p>
        <RegisterPasswordForm />
      </div>
    </section>
  );
}
