import { Metadata } from "next";
import { ScheduleTransactionForm } from "@/components/schedule-transaction-form";
export const metadata: Metadata = {
  title: "Schedule",
  description: "Schedule Transaction",
};
export default function ConfirmTransaction() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight flex items-center">
        Schedule Transaction
      </h3>

      <ScheduleTransactionForm />
    </section>
  );
}
