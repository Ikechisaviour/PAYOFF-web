"use client";
import { Button } from "./ui/button";
import { useLocalStorage } from "usehooks-ts";
import { APP_KEYS } from "@/lib/constants";
import { Icons } from "./icons";
import { useCopyToClipboard } from "usehooks-ts";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MiniActions } from "./mini-actions";

// Animation variants
const slideUpVariants = {
  initial: { opacity: 0 },
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    <div>
      <h3 className="scroll-m-20 text-lg lg:text-xl tracking-tight font-light text-dashboardLink">
        Welcome back, <span className="font-semibold">Musa</span>
      </h3>
      <div className="border p-5 rounded-lg mt-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h4 className="scroll-m-20 text-base font-normal lg:text-lg tracking-tight">
              Online balance
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
          <div className="md:border-l md:pl-5 grid gap-5">
            <div>
              <h4 className="text-xs lg:text-sm text-secondary-green">
                Offline balance
              </h4>
              <motion.h2
                className="text-[#666666] text-lg lg:text-xl font-medium"
                initial="hidden"
                animate="visible"
              >
                {value ? "₦30,290.09" : "*****"}
              </motion.h2>
            </div>

            <div>
              <h4 className="text-xs lg:text-sm text-secondary-green">Bonus</h4>
              <motion.h2
                className="text-[#666666] text-lg lg:text-xl font-medium"
                initial="hidden"
                animate="visible"
              >
                {value ? "₦5,300.00" : "*****"}
              </motion.h2>
            </div>
          </div>
        </div>

        <MiniActions />
      </div>
    </div>
  );
}
