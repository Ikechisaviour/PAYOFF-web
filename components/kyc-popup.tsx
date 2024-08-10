"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";

export function KycPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="block border text-formText mt-5 font-normal"
          variant="outline"
        >
          Upgrade Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#fff]">
        <DialogHeader>
          <DialogTitle>Upgrade Level</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <div className=" bg-[#F2F3F5] font-medium rounded-lg p-3 ">
            <h3 className="text-xs lg:text-sm font-medium ">KYC Level</h3>

            <Input type="range" className="bg-[#EAECF0] text-status"/>
            <div className="bg-[#E3EDE2]  mt-2 text-[#3E3C3C] text-xs p-2">
              <Icons.info className="w-4 h-4 text-status inline" />{" "}
              <span className="font-semibold">
                You currently don’t have a level
              </span>{" "}
              Provide the requirements below to enjoy the benefits of Level 1.
            </div>
          </div>

          <h3 className="text-xs lg:text-sm font-medium  mt-5">
            Level 1 Requirements
          </h3>
          <div className=" mt-2 bg-[#F2F3F5] font-medium rounded-lg p-3 border-dashed">
            <h3 className="text-xs lg:text-sm">
              <Icons.stickyNote className="inline w-4 h-4" /> NIN Number
            </h3>
          </div>

          <h3 className="text-xs lg:text-sm font-medium mt-5">
            Level 1 Benefits
          </h3>
          <div className=" mt-2 bg-[#F2F3F5] font-medium rounded-lg p-3 border-dashed">
            <h3 className="text-xs lg:text-sm">Account Limits</h3>
            <div className=" grid grid-cols-2 mt-5 gap-5">
              <div className="border-r">
                <div className="">
                  <h4 className="text-xs text-[#6F6F6F]">
                    Single Credit Limit:
                  </h4>
                  <p className="text-xs lg:text-sm font-medium mt-1">
                    ₦500,000.00
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs text-[#6F6F6F]">
                    Single Credit Limit:
                  </h4>
                  <p className="text-xs lg:text-sm font-medium mt-1">
                    ₦500,000.00
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <h4 className="text-xs text-[#6F6F6F]">
                    Single Credit Limit:
                  </h4>
                  <p className="text-xs lg:text-sm font-medium mt-1">
                    ₦500,000.00
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs text-[#6F6F6F]">
                    Single Credit Limit:
                  </h4>
                  <p className="text-xs lg:text-sm font-medium mt-1">
                    ₦500,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full bg-status mt-5 font-medium">
            Upgrade To Level 1
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
