"use client";
import Link from "next/link";
import Image from "next/image";
import { Bag } from "@/assets";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hover: { scale: 1.05, y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
};

export function AdSpace() {
  return (
    <motion.div className="bg-white p-5 md:p-3 border row-span-3 flex justify-center items-center ">
      <motion.div
        whileHover="hover"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className=" relative w-full"
      >
        <Link
          href="/dashboard/schedule"
          className="bg-[#FFEB69] rounded-[12px] p-3 block hover:opacity-80 "
        >
          <h3 className="scroll-m-20 text-lg lg:text-2xl text-black font-semibold tracking-tight">
            Schedule your <br /> transfer
          </h3>
          <motion.div
            className="relative"
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Image
              src={Bag}
              alt="Bag"
              className="w-[154px] h-[154px] mx-auto object-contain mt-3"
              priority
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
