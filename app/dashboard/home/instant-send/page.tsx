import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Send",
  description: "Instantly Send Money",
};
export default function InstantSend() {
  return (
    <section className="font-inter w-full h-full bg-white p-5 border mt-5">
      <div className="mx-auto grid place-items-center">
        <div className="w-[400px] h-[400px] bg-[#D9D9D9]"></div>
        <h3 className="text-black text-xl lg:text-2xl font-medium mt-5 lg:mt-10 text-center">
          Scan the receiver’s code to send money or make payment
        </h3>
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
