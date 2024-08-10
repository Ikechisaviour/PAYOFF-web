"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ConfirmTransportationDetails() {
  return (
    <div className="my-5 md:max-w-[500px]">
      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight">
      Name Of Transport Company:<span className="text-status">Access Bank</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
      Departure Location:<span className="text-status"> Princewill Amadi</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
      Destination:<span className="text-status"> ********098</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
      Number Of Seats:<span className="text-status"> ********098</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Amount:<span className="text-status"> ₦100,000</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
      Departure Date:<span className="text-status"> Temporary rent fee</span>
      </h3>


      <Button className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5  rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
        Confirm
      </Button>
    </div>
  );
}
