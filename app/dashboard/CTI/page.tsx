import { CheckTransactionForm } from "@/components/check-transaction-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Transaction",
  description: "Check Transaction",
};
export default function CheckTransaction() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Check Transaction
      </h3>
      <div className="lg:max-w-[512px]">
        <CheckTransactionForm />
      </div>
    </section>
  );
}
