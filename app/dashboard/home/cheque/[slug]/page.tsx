import { Balance } from "@/components/balance-in-cheque";
import { RedeemChequeForm } from "@/components/redeem-cheque-form";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ChequeDetails({ params }: PageProps) {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight">
        Cheque
      </h3>

      <div className="md:max-w-[514px] mt-5">
        <Balance />
        <RedeemChequeForm/>
      </div>
    </section>
  );
}
