"use client";
import Image from "next/image";
import { Coins } from "@/assets";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { useLocalStorage, useCopyToClipboard } from "usehooks-ts";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import Link from "next/link";
const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};
export function Successful() {
  const { toast } = useToast();
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast({ title: "Copied!", description: text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };
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
      <div className="w-full mb-5">
        <Label
          htmlFor="name"
          className="text-formLabel font-medium text-xs lg:text-sm"
        >
          Cheque Code
        </Label>
        <div className="flex items-center  border border-status w-full rounded-xl">
          <Input value={"CRV-2024"} className="bg-transparent border-0" />
          <Button
            onClick={handleCopy("CRV-2024")}
            size="sm"
            variant="ghost"
            className="inline md:ml-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-[#fff] focus-visible:ring-offset-0"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Icons.copy className="w-3 h-3 inline" />
            </motion.div>
          </Button>
        </div>
        <p className="text-xs lg:text-sm text-formText">
          copy and share the cheque codes
        </p>
      </div>

      <Button className="w-full bg-status text-white lg:text-base text-sm  p-2 mt-5 lg:mt-0 rounded-lg cursor-pointer hover:opacity-80 hover:bg-primaryGreen ease-in ">
        Share Cheque Code
      </Button>
      <Button
        variant="ghost"
        className="w-full bg-[#E1E1E1]  text-[#73A952] lg:text-base text-sm  p-2 mt-5 rounded-lg cursor-pointer  hover:bg-status hover:text-white ease-in "
      >
        <Link href="/dashboard/home">Return to dashboard</Link>
      </Button>
    </div>
  );
}
