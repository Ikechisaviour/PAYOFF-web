import { HistoryTable } from "@/components/history-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "Fetch your payment history",
};
export default function History() {
  return (
    <section className="font-inter w-full mt-5 border bg-white p-5">
      <HistoryTable />
    </section>
  );
}
