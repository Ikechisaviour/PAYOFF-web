import { Metadata } from 'next';
import Link from 'next/link';
import EmailOtpForm from '@/components/generate-email-otp-form';

export const metadata: Metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
};
export default function RegisterPage() {
  return (
    <section className="font-sans">
      {/* <h4 className="scroll-m-20 text-[#9A9A9A] text-sm lg:text-base text-right tracking-tight mr-5">
        Already have an account?{" "}
        <Link
          className="text-primaryGreen hover:opacity-90 ease-in"
          href={"/auth/login"}
        >
          Log In
        </Link>
      </h4> */}
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-left">
          Create Account
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-left">
          To start PAYING OFF, you only need an email address and/or phone
          number.
        </p>
        <EmailOtpForm />
      </div>
    </section>
  );
}
