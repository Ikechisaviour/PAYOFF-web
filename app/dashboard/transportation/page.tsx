import { TransportationForm } from "@/components/transportation-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation",
  description: "Transportation",
};
export default function Transportation() {
  return (
    <section className="font-inter w-full h-full mt-5 border bg-white p-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
        Transportation Bill
      </h3>
      <div className="max-w-[640px]">
        <TransportationForm />
      </div>
    </section>
  );
}
