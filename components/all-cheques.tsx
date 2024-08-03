"use client";
import { Icons } from "./icons";
import { Button } from "@/components/ui/button";

export function AllCheques() {
  return (
    <div className="mt-5 w-full">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="flex items-center justify-between [&:not(:first-child)]:mt-5 w-full">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="flex-shrink-0 bg-[#F8FFF0] w-7 md:w-10 h-7 md:h-10 text-status flex justify-center items-center rounded">
              <Icons.instagram className="" />
            </div>

            <div>
              <h3 className="text-sm lg:text-base font-medium">CRV-2024</h3>
              <p className="font-light text-[10px] lg:text-xs mt-2">
                Chukwuebuka wants to redeem your cheque
              </p>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-xs lg:text-sm font-medium">₦9,200</h3>
            <p className="font-light text-[10px] lg:text-xs mt-3 ">27th Jul 2024</p>
          </div>
        </div>
      ))}
    </div>
  );
}
