import { BettingForm } from "@/components/betting-form";
import { CableForm } from "@/components/cable-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bet Top-up",
  description: "Bet Top-up",
};
export default function Betting() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Bet Top-up
      </h3>
      <div className="mt-5 lg:max-w-[512px]">
        <BettingForm/>
      </div>
    </section>
  );
}
