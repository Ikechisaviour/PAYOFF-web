"use client";
import { cardItems } from "@/config/dashboard";
import { Card } from "./credit-card";
import { CardDetails } from "./card-details";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { motion } from "framer-motion";

export function CardBalance() {
  return (
    <div>
      <div className="mt-5 relative h-[300px] overflow-x-auto">
        {cardItems.map((card, index) => (
          <motion.div
            key={card._id}
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: `${20 * index}px`, y: `${20 * index}px` }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            style={{
              position: "absolute",
              width: "311px",
              height: "200px",
              zIndex: cardItems.length + index,
              borderRadius: "16px", // optional: to make it look nicer with rounded corners
            }}
          >
            <Card isSelected={false} {...card} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-[388px]">
        <CardDetails />

        <div className="mt-5">
          <Button className="w-full mt-5 bg-[#73A952]">
            <Icons.add className="mr-2" />
            Add new Card
          </Button>

          <Button
            variant="ghost"
            className="text-[#73A952] border text-sm shadow-sm lg:text-base w-full mt-5"
          >
            Activate a card{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
