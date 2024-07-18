import { Metadata } from "next";
import ConfirmOtpForm from "@/components/confirm-otp-form";

export const metadata: Metadata = {
  title: "OTP",
  description: "Please confirm the code sent to you.",
};
export default function RegisterPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Confirm Otp
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          Please input OTP sent to you
        </p>
         <ConfirmOtpForm />
      </div>
    </section>
  );
}
