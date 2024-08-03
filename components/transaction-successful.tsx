"use client";
import Image from "next/image";
import { Coins } from "@/assets";
import { Button } from "./ui/button";

export function TransactionSuccessful() {
  return (
    <div className="flex flex-col justify-center items-center md:max-w-[500px] mx-auto">
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight flex items-center">
        Transaction Successful!
      </h3>

      <Image
        src={Coins}
        alt="coins"
        width={100}
        height={100}
        className="w-[215px] h-[324px] object-contain"
      />

      <Button className="w-full bg-status  text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
        Download Receipt
      </Button>
      <Button
        variant="ghost"
        className="w-full bg-[#E1E1E1]  text-[#73A952] lg:text-base text-sm  p-2 mt-5 rounded-lg cursor-pointer  hover:bg-status hover:text-white ease-in "
      >
        Schedule Transaction
      </Button>
    </div>
  );
}
