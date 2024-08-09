import { Balance } from "@/components/balance-in-cheque";
import { CreateChequeForm } from "@/components/create-cheque-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Cheque",
  description: "Create Cheque",
};

export default function CreateCheque() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Cheque
      </h3>
      <div className="lg:max-w-[514px] mt-5">
        <Balance />
        <CreateChequeForm />
      </div>
    </section>
  );
}
