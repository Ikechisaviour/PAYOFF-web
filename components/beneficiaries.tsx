"use client";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { SendMoneyForm } from "./send-money-form";

export function Beneficiaries() {
  return (
    <div className=" max-w-[700px]  my-5 lg:my-10">
      <h4 className="text-lg lg:text-xl">Beneficiaries</h4>

      <div className=" flex flex-wrap md:flex-nowrap gap-5 items-center my-2 lg:my-3">
        <div className=" flex  gap-5 items-center no-scrollbar overflow-x-auto">
          <Button
            variant="ghost"
            className="flex flex-col  justify-center h-auto"
          >
            <div className="w-10 h-10 rounded-full border border-dashed border-status flex justify-center items-center">
              <Icons.add className="text-status text-xs" />
            </div>
            <h3 className="text-sm lg:text-lg mt-2">Add</h3>
          </Button>

          <div className=" flex gap-5 w-auto">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center h-auto w-auto flex-shrink-0"
              >
                <Image
                  src="https://via.placeholder.com/500x500"
                  className="w-10 h-10 rounded-full"
                  alt="anon"
                  width={100}
                  height={100}
                />
                <h3 className="text-sm lg:text-lg mt-2">John</h3>
              </div>
            ))}
          </div>
        </div>

        <Button
          asChild
          variant="ghost"
          className="text-status w-full md:w-auto"
        >
          <Link href="/dashboard/home/send/beneficiaries">
            See more <Icons.chevronDown className="" />
          </Link>
        </Button>
      </div>

      <div className="max-w-[500px]">
        <SendMoneyForm />
      </div>
    </div>
  );
}

