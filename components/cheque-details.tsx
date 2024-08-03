"use client";
import { Button } from "@/components/ui/button";


export function ChequeDetails() {
  return (
    <div className="border rounded-xl p-2">
      <div className="flex flex-col border-b py-5 justify-center items-center gap-2">
        <h3 className="scroll-m-20 text-2xl lg:text-3xl font-medium tracking-tight">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(9200)}
        </h3>

        <p className="text-center text-[#757575] text-xs mt-5">
          Closed Cheque Redemption Request
        </p>
      </div>
      <div className="border-b p-5">
        <h3 className="text-sm lg:text-base text-[#888888]">
          Cheque: <span className="text-black">Closed Cheque</span>
        </h3>

        <h3 className="text-sm lg:text-base text-[#888888] mt-3">
          Time Generated:{" "}
          <span className="text-black">9:14AM, Feb. 15, 2024.</span>
        </h3>

        <h3 className="text-sm lg:text-base text-[#888888] mt-3">
          Redeemer: <span className="text-black">Ben Charles</span>
        </h3>
        <h3 className="text-sm lg:text-base text-[#888888] mt-3">
          Cheque Code: <span className="text-black">CRV-2024</span>
        </h3>
      </div>

      <div className="flex items-center gap-5 justify-between py-10 px-5 border-b">
        <Button
          variant="ghost"
          className=" w-1/2 border border-[#C20701] text-[#C20701] bg-transparent lg:text-base text-sm  py-2  px-5    rounded-lg cursor-pointer hover:opacity-80  ease-in "
        >
          Decline Request
        </Button>
        <Button className=" w-1/2 bg-status  text-white lg:text-base text-sm  py-2  px-5   rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
          Accept Request
        </Button>
      </div>
    </div>
  );
}
