"use client";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useLocalStorage, useCopyToClipboard } from "usehooks-ts";
import { APP_KEYS } from "@/lib/constants";
import { useToast } from "./ui/use-toast";
import { Icons } from "./icons";

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};
export function Balance() {
  const { toast } = useToast();
  const [value, setValue, removeValue] = useLocalStorage<boolean>(
    APP_KEYS.SHOW_BALANCE,
    false
  );
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
    <div className="bg-[#00AB1B] rounded-xl p-5">
      <h4 className="scroll-m-20 text-base font-normal lg:text-lg tracking-tight">
      Current balance
      </h4>
      <motion.h1
        className={cn(
          "scroll-m-20 text-xl mt-3 font-semibold text-[#0E0F0C] tracking-tight lg:text-[2.6rem] flex gap-2 md:gap-5",
          value ? "items-center" : "items-end"
        )}
      >
        <AnimatePresence>
          {value ? (
            <motion.span>₦230,290.09</motion.span>
          ) : (
            <motion.span>*****</motion.span>
          )}
        </AnimatePresence>
        <Button
          className="inline text-[#292D32]"
          size="sm"
          variant="ghost"
          onClick={() => setValue((val) => !val)}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {value ? (
              <Icons.eyeOff className="w-4 h-4" />
            ) : (
              <Icons.eye className="w-4 h-4" />
            )}
          </motion.div>
        </Button>
      </motion.h1>

      <div className="my-2 text-xs ">
        <p className="inline-block leading-7 bg-[#F8FFF0] rounded-2xl font-light text-secondary-green px-3 py-[.1rem]">
          Account Number: <span className="font-medium">1234567890</span>
        </p>

        <Button
          onClick={handleCopy("1234567890")}
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
    </div>
  );
}
