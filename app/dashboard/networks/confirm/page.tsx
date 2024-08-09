import { Metadata } from "next";
import { ConfirmTransactionDetails } from "@/components/network-confirmation";

export const metadata: Metadata = {
  title: "Confirm",
  description: "Confirm Transaction",
};
export default function ConfirmTransaction() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight flex items-center">
        Confirm Transaction
      </h3>

      <ConfirmTransactionDetails />
    </section>
  );
}
