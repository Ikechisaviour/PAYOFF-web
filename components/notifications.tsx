"use client";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

const notifications = [
  {
    title: "Your transfer was successful ✅",
    description:
      "Your transfer of NGN20,000 to OCHOLI MEPA AUGUSTINE was successful.",
  },
  {
    title: "Credit Alert !",
    description:
      "Your have just received NGN10,000 from OCHOLI MEPA AUGUSTINE was successful.",
  },
  {
    title: "Your transfer was successful ✅",
    description:
      "Your transfer of NGN20,000 to OCHOLI MEPA AUGUSTINE was successful.",
  },
  {
    title: "Credit Alert !",
    description:
      "Your have just received NGN10,000 from OCHOLI MEPA AUGUSTINE was successful.",
  },
];

export function Notifications() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <motion.div className={cn(step === 0 ? "block" : "hidden")}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg lg:text-xl font-medium">Notifications</h3>
          <Button variant="ghost" onClick={() => setStep(1)}>
            <Icons.bolt className="w-6 h-6" />
          </Button>
        </div>
        <div className="my-5">
          {notifications.map((notification) => (
            <div key={notification.title} className="border-b [&:not(:first-child)]:mt-5">
              <h3 className=" text-sm lg:text-base font-medium">
                {notification.title}
              </h3>
              <p className="text-xs lg:text-sm text-[#303030] mt-1 pb-1">
                {notification.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center items-center">
          <Button
            className="mx-auto text-x lg:text-sm border rounded-2xl h-[25px]"
            variant="ghost"
          >
            Clear All
          </Button>
        </div>
      </motion.div>
      <motion.div className={cn(step === 1 ? "block" : "hidden")}>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="p-0 hover:bg-transparent hover:opacity-80" onClick={() => setStep(0)}>
            <Icons.arrowLeft className="w-6 h-6" />
          </Button>
          <h3 className="text-lg lg:text-xl font-medium">
            Notifications settings
          </h3>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">
                Payment (Credit)
              </h3>
              <p className="text-xs text-[#757575]">
                Notifications for credits into your account from transfers, POS
                payments, etc.
              </p>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">Email</h3>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">
                Push Notification
              </h3>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">SMS</h3>
              <p className="text-xs text-[#757575]">
                *Charges apply - Each SMS alert costs
              </p>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">
              Payment (Debit)
              </h3>
              <p className="text-xs text-[#757575]">
                Notifications for credits into your account from transfers, POS
                payments, etc.
              </p>
            </div>

            <Switch
              id="airplane-mode"
            
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">Email</h3>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">
                Push Notification
              </h3>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h3 className="text-xs lg:text-sm font-medium ">SMS</h3>
              <p className="text-xs text-[#757575]">
                *Charges apply - Each SMS alert costs
              </p>
            </div>

            <Switch
              id="airplane-mode"
              className="data-[state=checked]:bg-status data-[state=unchecked]:bg-status ml-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
