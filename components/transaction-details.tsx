"use client";
import Image from "next/image";
import { IconButton } from "@/assets";
import { Icons } from "./icons";

export function TransactionDetails() {
  return (
    <div className="flex items-center justify-between [&:not(:first-child)]:mt-5  md:[&:not(:first-child)]:mt-7">
      <div className="flex items-center">
        <div className="w-[1.25rem] h-[1.25rem] lg:w-[48px] lg:h-[48px] border bg-[#ECEFEB] rounded-full flex items-center justify-center">
          <Icons.arrowDown className="" />
          {/* <Image src={IconButton} alt="icon" className="w-full h-full" /> */}
        </div>
        <div className="ml-2">
          <p className="text-black  font-medium text-sm lg:text-base">
            Sarah Davies
          </p>
          <h4 className="text-[#454745] lg:mt-1  text-xs lg:text-sm">
            Sent · 2nd April 2024
          </h4>{" "}
        </div>
      </div>
      <div>
        <p className="text-black font-medium text-sm lg:text-base">
          ₦50,000.00
        </p>
        <h4 className="text-[#454745] lg:mt-1  text-xs lg:text-sm">9.37 GBP</h4>{" "}
      </div>
    </div>
  );
}
