"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ConfirmTransactionDetails() {
  return (
    <div className="my-5 md:max-w-[500px]">
      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight">
        Bank: <span className="text-status">Access Bank</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Account Name:<span className="text-status"> Princewill Amadi</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Account Number:<span className="text-status"> 1234567890</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Amount:<span className="text-status"> ₦100,000</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Narration:<span className="text-status"> Temporary rent fee</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5 flex items-center">
        Add Beneficiary:{" "}
        <span className="text-status">
          {" "}
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
          />
        </span>
      </h3>

      <Button className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5  rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
        Confirm
      </Button>
    </div>
  );
}
