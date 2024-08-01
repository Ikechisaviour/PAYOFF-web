import { Metadata } from "next";
import { CardLink } from "@/components/cardLink";
import { AdSpace } from "@/components/adspace";
import { Balance } from "@/components/balance";
import { MiniTable } from "@/components/mini-table";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Payoff Dashboard",
};
export default function Dashboard() {
  return (
    <section className="font-inter w-full h-full mt-5 grid grid-cols-10 gap-5">
      <div className="md:col-span-7 col-span-10 bg-white p-5 border">
        <Balance />
        <MiniTable/>
      </div>
      <div className="md:col-span-3 col-span-10 grid gap-5 grid-rows-10">
        <CardLink />
        <AdSpace />
      </div>
    </section>
  );
}
