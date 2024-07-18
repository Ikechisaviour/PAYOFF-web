"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

export function Navigator() {
  const router = useRouter();
  return (
    <div className="flex items-center text-xs text-[#292D32]">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="p-1 hover:bg-transparent"
        >
          <Icons.chevronLeft className="w-5 h-5 rounded-[5px] border border-[#292D32]" />
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => router.forward()}
          variant="ghost"
          className="p-1 hover:bg-transparent"
        >
          <Icons.chevronRight className="w-5 h-5 rounded-[5px] border border-[#292D32]" />
        </Button>
      </motion.div>
    </div>
  );
}
