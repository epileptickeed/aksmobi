"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const PhoneInfoSidebar: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const variants = {
    hidden: {
      x: 1500,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: 1500,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <>
      {" "}
      <PhoneCall
        className="lg:hidden cursor-pointer"
        size={32}
        onClick={() => setOpen(true)}
      />
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className={
              open
                ? "fixed top-0 right-0 h-full bg-[#bdbdbd] w-[200px]"
                : "fixed"
            }
          >
            <X
              onClick={() => setOpen(false)}
              className="mx-4 mt-8 mb-4 cursor-pointer text-black"
            />
            <div className="w-full text-[20px] font-bold text-black relative text-center">
              +8 (343) 311-21-11
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
