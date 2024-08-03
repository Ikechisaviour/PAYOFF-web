"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function SavedBeneficiaries() {
  const router = useRouter();
  return (
    <div>
      <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight flex items-center">
        <Button variant="ghost">
          <Icons.arrowLeft className="" />
        </Button>
        Beneficiary
      </h3>

      <div className="md:max-w-[600px] mt-5 border rounded-xl p-3">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              " flex items-center justify-between py-5 ",
              idx < 9 && "border-b"
            )}
          >
            <div className="flex gap-5 items-center">
              <div className="flex-shrink-0 bg-[#FAFFF6] w-7 h-7 md:w-10 md:h-10 rounded-full text-status text-xs lg:text-base border-4 border-[#EDFFE2] flex justify-center items-center">
                {" "}
                JC
              </div>
              <div>
                <h3 className="text-[#0E0F0C] text-sm  lg:text-lg font-medium">
                  JESSICA CHIAMAKA CHIZOBA
                </h3>
                <p className="text-xs lg:text-sm text-[#454745]">
                  OPAY · 1238904567
                </p>
              </div>
            </div>
            <Button variant="ghost">
              <Icons.trash className=" text-sm lg:text-base" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
