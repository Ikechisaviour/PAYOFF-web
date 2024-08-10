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

export function ReferralPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="block border text-formText mt-5 font-normal"
          variant="outline"
        >
          Referral
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#fff]">
        <DialogHeader>
          <DialogTitle>Referral</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <h2 className="font-semibold text-xl lg:text-3xl">
            Refer Customers & Earn
          </h2>
          <p className="text-[#6F6F6F] text-xs lg:text-sm">
            Invite your friends, family and customers to bank with Payoff and
            make money when they make payments
          </p>
          <div className=" bg-[#F2F3F5]  flex flex-col gap-2 items-center rounded-lg p-3 border-dashed">
            <h5 className="text-[#6F6F6F] text-center  text-xs lg:text-sm">
              Referral Link
            </h5>

            <span className="flex items-center border gap-3 bg-white rounded-lg px-5  text-formText">
              JK65R2{" "}
              <Button variant="ghost" className="p-0 hover:bg-transparent ">
                <Icons.copy className="w-4 h-4" />
              </Button>
            </span>
            <div className="bg-[#E3EDE2]  mt-2 text-[#3E3C3C] text-xs p-2">
              <Icons.info className="w-4 h-4 text-status inline" /> Dial{" "}
              <span className="text-status font-medium">*340*0#</span> on your
              registered phone number to get your BVN
            </div>
          </div>
          <div className="border mt-5 border-[#939496] rounded-lg p-3 border-dashed">
            <h5 className="text-[#6F6F6F]  text-xs lg:text-sm">
              Referral Link
            </h5>
            <p className="text-xs lg:text-sm mt-5">
              https://join.moniepoint.com?adj_r=sFOJR423
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full bg-status font-medium">
            Copy Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
