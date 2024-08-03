import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Confirm Receive",
  description: "Confirm Receive",
};
export default function ConfirmReceive() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <div className="mx-auto grid place-items-center">
        <div className="w-full md:w-[400px] h-[200px] md:h-[400px] bg-[#D9D9D9] mx-auto"></div>
        <Button className="w-full bg-status  text-white lg:text-base text-sm md:max-w-[500px]  p-2 mt-5 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
          Share QR Code
        </Button>
      </div>
      <h3 className="text-tab-gray text-lg lg:text-xl font-medium mt-5">
        Payment Steps:
      </h3>
      <h3 className=" mt-5 flex gap-5 text-sm lg:text-base">
        <span className=" text-[#73A952] flex-wrap lg:flex-nowrap text-nowrap font-medium">
          Step 1:
        </span>
        <span className="text-tab-gray">
          Upload Receiver’s Qr code or place camera in front of code
        </span>
      </h3>

      <h3 className=" mt-5 flex gap-5 text-sm lg:text-base">
        <span className=" text-[#73A952] flex-wrap md:flex-nowrap text-nowrap font-medium">
          Step 2:
        </span>
        <span className="text-tab-gray">
          You will be given a temporary transfer account (expires after 30
          mins).
        </span>
      </h3>

      <h3 className=" mt-5 flex gap-5 text-sm lg:text-base">
        <span className=" text-[#73A952] flex-wrap md:flex-nowrap text-nowrap font-medium">
          Step 3:
        </span>
        <span className="text-tab-gray">
          Transfer money to the account via your online banking or USSD
        </span>
      </h3>

      <h3 className=" mt-5 flex gap-5 text-sm lg:text-base">
        <span className=" text-[#73A952] flex-wrap md:flex-nowrap text-nowrap font-medium">
          Step 4:
        </span>
        <span className="text-tab-gray">
          Check your transaction history in{" "}
          <span className="text-[#73A952] font-medium">Payoff</span>. Transfer
          generally credit within 10 minutes. If the deposit doesn’t credit
          within 24 hours please contact your bank.
        </span>
      </h3>
    </section>
  );
}
