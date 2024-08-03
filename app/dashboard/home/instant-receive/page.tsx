import { Metadata } from "next";
import { ReceiveMoneyForm } from "@/components/recieve-money-form";
export const metadata: Metadata = {
  title: "Instant Receive",
  description: "Instantly Receive Money",
};
export default function AddMoney() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Enter amount to be received
      </h3>
      <ReceiveMoneyForm/>
    </section>
  );
}
