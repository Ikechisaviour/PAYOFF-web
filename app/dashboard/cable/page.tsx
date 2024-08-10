import { CableForm } from "@/components/cable-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cable",
  description: "Cable",
};
export default function Cable() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
      Cable Subscription
      </h3>
      <div className="mt-5 lg:max-w-[512px]">
       <CableForm/>
      </div>
    </section>
  );
}