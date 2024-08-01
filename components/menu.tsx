"use client";

import { Icons } from "./icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IProps {
  icon: keyof typeof Icons;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const textVariants = {
  initial: { color: "#5F5F5F" },
  hover: { color: "#388903", transition: { duration: 0.3 } },
};

export function Menu({ icon, name, isActive = false, onClick }: IProps) {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <motion.div
      className="flex flex-col items-center gap-2 max-w-[153px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
        <Button
          variant="ghost"
          className={cn(
            " bg-[#F8FFF1] text-secondary-green w-[44px] h-[44px] p-0 hover:bg-secondary-green hover:text-white",
            isActive && "bg-secondary-green text-white"
          )}
          onClick={onClick}
        >
          <Icon />
        </Button>
      </motion.div>
      <motion.h4
        className="scroll-m-20 text-xs text-center lg:text-base tracking-tight text-[#5F5F5F]"
        variants={textVariants}
        initial="initial"
        whileHover="hover"
      >
        {name}
      </motion.h4>
    </motion.div>
  );
}
