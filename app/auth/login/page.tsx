import { Metadata } from "next";
import LoginForm from "@/components/login-form";


export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};
export default function LoginPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Log in
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          Welcome back! Please enter your details.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}
