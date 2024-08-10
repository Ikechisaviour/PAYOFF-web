"use client";
import { Button } from "@/components/ui/button";

export function HotelConfirmationDetails() {
  return (
    <div className="my-5 md:max-w-[500px]">
      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight">
        Location: <span className="text-status">Ojuelegba, Lagos State</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Hotel Name:<span className="text-status"> Ben Charles Continental</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Number Of Rooms:<span className="text-status"> 01</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Booking Period:
        <span className="text-status"> 12 Jun, 2024 - 14 Jun, 2024</span>
      </h3>

      <h3 className="scroll-m-20 text-sm lg:text-base font-medium tracking-tight mt-5">
        Booking Plan:<span className="text-status"> Economy</span>
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
