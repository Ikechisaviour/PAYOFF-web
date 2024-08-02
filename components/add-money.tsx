"use client";
import { BankTransfer } from "./bank-transfer-form";

export function Add() {
  return (
    <div>
      <BankTransfer />
      <h3 className="text-tab-gray text-lg lg:text-xl font-medium mt-5">
        Payment Steps:
      </h3>
      <h3 className=" mt-5 flex gap-5 text-sm lg:text-base">
        <span className=" text-[#73A952] flex-wrap lg:flex-nowrap text-nowrap font-medium">
          Step 1:
        </span>
        <span className="text-tab-gray">
          Enter the amount you want to deposit and click the “Top Up Now”
          button.
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
          within 24 hours please contact your bank
        </span>
      </h3>
    </div>
  );
}
