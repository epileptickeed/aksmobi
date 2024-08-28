'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const NavSidebar: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const variants = {
    hidden: {
      x: -500,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: -500,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <Menu className="lg:hidden cursor-pointer" size={32} onClick={() => setOpen(true)} />
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className={
              open
                ? 'fixed top-0 left-0 h-full bg-[#bdbdbd] w-[200px]'
                : 'fixed translate-x-[-500px]'
            }>
            <X
              onClick={() => setOpen(false)}
              className="mx-4 mt-8 mb-4 cursor-pointer text-black"
            />
            <div className="flex flex-col items-start justify-between gap-4 max-lg text-black relative">
              <Link
                href={'/'}
                className="hover:bg-[#444] hover:text-white transition-all w-full p-4">
                Наши услуги
              </Link>
              <Link
                href={'/'}
                className="hover:bg-[#444] hover:text-white transition-all w-full p-4">
                Бренды
              </Link>
              <Link
                href={'/'}
                className="hover:bg-[#444] hover:text-white transition-all w-full p-4">
                Отзывы
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
