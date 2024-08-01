"use client";
import Link from "next/link";
import Image from "next/image";
import { CardLinkImage } from "@/assets";
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

export function CardLink() {
  return (
    <motion.div
      className="bg-white p-5 md:p-3 border row-span-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="scroll-m-20 text-sm lg:text-base tracking-tight"
        variants={itemVariants}
      >
        My Cards
      </motion.h3>
      <motion.div variants={itemVariants}>
        <Link
          href="/dashboard/cards"
          className="block mt-5 lg:mt-7 hover:opacity-80"
        >
          <motion.div
            className="relative"
            whileHover="hover"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src={CardLinkImage}
              alt="cardlink"
              width={100}
              height={100}
              className="w-full h-[230px] rounded-md"
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
