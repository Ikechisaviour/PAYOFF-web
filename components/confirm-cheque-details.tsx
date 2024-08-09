"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ConfirmChequeDetails() {
  return (
    <div className="my-5 md:max-w-[500px]">
      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight">
        Cheque Type: <span className="text-status">Open</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Amount:<span className="text-status"> ₦100,000</span>
      </h3>

      <Button className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5  rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
        Confirm
      </Button>
    </div>
  );
}
