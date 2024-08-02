"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MiniVisaLogo, MiniMastercardLogo } from "@/assets";
import Image from "next/image";
import { TopUpCard } from "./top-up-card-form";
import Link from "next/link"
export function CardPaymentDetails() {
  return (
    <div>
      <h3 className="scroll-m-20 text-lg lg:text-xl text-[#61C556] font-medium tracking-tight">
        Card Payment Details
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-formText text-sm lg:text-base">
        Make payment with your card
      </p>

      <div className="mt-5  flex items-center justify-between p-2 border rounded-lg text-formText text-sm lg:text-base">
        <div className="flex items-center">
          {" "}
          <Image
            src={MiniMastercardLogo}
            alt="mastercard"
            className="mr-2 w-5 h-5 object-contain"
          />
          <h3>****3989</h3>
        </div>
        <Icons.circleHelp className="w-4 h-4" />
      </div>

      <div className="mt-5  flex items-center justify-between p-2 border rounded-lg text-formText text-sm lg:text-base">
        <div className="flex items-center">
          {" "}
          <Image
            src={MiniVisaLogo}
            alt="mastercard"
            className="mr-2 w-5 h-5 object-contain"
          />
          <h3>****3989</h3>
        </div>
        <Icons.circleHelp className="w-4 h-4" />
      </div>

      <Button
        type="submit"
        className="mt-5 w-full bg-[#73A952] text-white lg:text-base text-sm py-2 rounded-lg hover:opacity-80 hover:bg-primaryGreen transition ease-in-out"
        asChild
      >
        <Link href="/dashboard/home/add/card">
          {" "}
          <Icons.add className="mr-2" />
          Use a new card
        </Link>
      </Button>

      <TopUpCard />
    </div>
  );
}
