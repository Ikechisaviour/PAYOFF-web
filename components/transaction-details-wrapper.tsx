"use client";
import { Butterfly_Kids } from "next/font/google";
import { TransactionDetails } from "./transaction-details";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export function TransactionDetailsWrapper() {
  return (
    <div>
      <div>
        <h3 className="text-sm lg:text-base text-[#BBBBBB] mb-2">Today</h3>
        {Array.from({ length: 5 }).map((_, index) => (
          <TransactionDetails key={index} />
        ))}

        <div className="grid place-items-center mt-5 ">
          <Button
            variant="ghost"
            className="mx-auto text-xs lg:text-sm text-[#76BE56]"
          >
            See more <Icons.chevronDown className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="mt-5 lg:mt-10">
        <h3 className="text-sm lg:text-base text-[#BBBBBB] mb-2">Yesterday</h3>
        {Array.from({ length: 3 }).map((_, index) => (
          <TransactionDetails key={index} />
        ))}

        <div className="grid place-items-center mt-5 ">
          <Button
            variant="ghost"
            className="mx-auto text-xs lg:text-sm text-[#76BE56]"
          >
            See more <Icons.chevronDown className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="mt-5 lg:mt-10">
        <h3 className="text-sm lg:text-base text-[#BBBBBB] mb-2">
          2nd April, 2024
        </h3>
        {Array.from({ length: 3 }).map((_, index) => (
          <TransactionDetails key={index} />
        ))}

        <div className="grid place-items-center mt-5 ">
          <Button
            variant="ghost"
            className="mx-auto text-xs lg:text-sm text-[#76BE56]"
          >
            See more <Icons.chevronDown className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
