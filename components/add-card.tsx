"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { useState } from "react";

export function AddCardPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="block border bg-transparent text-status border-status font-normal"
          variant="outline"
        >
          New Card
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#fff]">
        <DialogHeader>
          <DialogTitle>New Card</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <h3 className="font-medium text-lg lg:text-xl ">
            Swipe to choose design
          </h3>

          <div className="w-full mt-1 border h-[200px] flex justify-center items-center">
            Card designs here
          </div>

          <h3 className="font-medium text-sm lg:text-base mt-5 flex justify-between items-center ">
            Transaction Limit Settings
            <Button className=" bg-transparent  font-normal" variant="ghost">
              <Icons.chevronRight className="w-5 h-5 p-0" />
            </Button>
          </h3>
        </div>
      </DialogContent>
    </Dialog>
  );
}
