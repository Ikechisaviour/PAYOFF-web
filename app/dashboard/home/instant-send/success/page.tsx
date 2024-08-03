import { Metadata } from "next";
import { ConfirmTransactionDetails } from "@/components/confirm-transaction-details";
import { TransactionSuccessful } from "@/components/transaction-successful";

export const metadata: Metadata = {
  title: "Success",
  description: "Transaction Successful",
};
export default function ConfirmTransaction() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <TransactionSuccessful />
    </section>
  );
}
