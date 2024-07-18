import { Metadata } from "next";
import RegisterInfo from "@/components/register-info-form";

export const metadata: Metadata = {
  title: "Add your basic information",
  description:
    "Please, provide valid information to help make your verification fast.",
};
export default function InfoPage() {
  return (
    <section className="font-sans">
      <div className="px-10 mt-10">
        <h2 className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight first:mt-0 text-center lg:text-left">
          Basic Information
        </h2>
        <p className="leading-7 text-secondaryParagraph text-xs dark:text-white  lg:text-lg [&:not(:first-child)]:mt-3 text-center lg:text-left">
          Please, provide valid information to help make your verification fast.
        </p>
        <RegisterInfo/>
      </div>
    </section>
  );
}
