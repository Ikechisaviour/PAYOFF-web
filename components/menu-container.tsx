"use client";

import { Menu } from "./menu";
import { motion } from "framer-motion";

// Define container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Define item variants for individual menu items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function MenuContainer() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[825px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Menu icon="add" name="Add Fund" isActive />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="badgeDollarSign" name="Send" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="zap" name="Instant Send" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="badgeDollarSign" name="Instant Receive" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="banknote" name="Cheque" />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Menu icon="wifi" name="Airtime/data" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="billing" name="Manage cards" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="batteryCharging" name="Electricity" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="ticket" name="Event ticket" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="building" name="Hotel Bills" />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Menu icon="busFront" name="Road Transport" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="plug" name="Cable TV" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="clock" name="Transaction History" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="receiptText" name="Betting" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Menu icon="scanLine" name="Scan-to-pay" />
      </motion.div>
    </motion.div>
  );
}
