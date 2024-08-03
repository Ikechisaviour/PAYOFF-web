import { Metadata } from "next";
import { Beneficiaries } from "@/components/beneficiaries";

export const metadata: Metadata = {
  title: "Send",
  description: "Send Money",
};
export default function AddMoney() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
        Send Money
      </h3>

      <Beneficiaries/>
    </section>
  );
}
