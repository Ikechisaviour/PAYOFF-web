"use client";
import { motion, MotionStyle } from "framer-motion";
import { APP_KEYS } from "@/lib/constants";
import { Card as CardTypes } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface IProps extends CardTypes {
  isSelected: boolean;
  onSelect?: (selected: boolean) => void;
  style?: MotionStyle;
}
export function Card({ type, cardNumber, name, expiryDate, cvv, style }: IProps) {
  const cardAsset =
    APP_KEYS.CARD_IMAGES[
      (type as unknown as "visa" | "mastercard" | "verve") || "visa"
    ];
  return (
    <motion.div
      className={cn("p-5 rounded-2xl max-w-sm text-white  relative")}
      style={{ background: cardAsset.bg, ...style }}
    >
      <Image
        src={cardAsset.logo}
        alt="card logo"
        className="w-[61px] h-[20px] object-contain mx-auto my-5"
      />
      <h3 className="scroll-m-20 text-xl lg:text-2xl   font-medium tracking-tight  flex justify-between items-center">
        {cardNumber.split(" ")?.map((num) => (
          <span key={num}>{num}</span>
        ))}
      </h3>
      <div className="mt-8 flex justify-between">
        <div>
          <h4 className="scroll-m-20 text-xs  font-semibold tracking-tight">
            {name}
          </h4>
          <p className=" [&:not(:first-child)]:mt-1 text-xs">
            Exp <span className="font-bold">{expiryDate}</span>
          </p>
        </div>
        <div>
          <h4 className="scroll-m-20 text-xs  tracking-tight">
            CVV
          </h4>
          <p className=" font-bold [&:not(:first-child)]:mt-1 text-xs">{cvv}</p>
        </div>
      </div>
    </motion.div>
  );
}
