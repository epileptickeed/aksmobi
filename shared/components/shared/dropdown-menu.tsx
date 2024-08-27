'use client';

import { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { useClickAway } from 'react-use';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
interface Props {
  className?: string;
}

export const DropdownMenu: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <motion.nav
      ref={ref}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={cn('w-[60%] rounded-2xl p-2 px-4 bg-[#444444] relative', className)}>
      <motion.button
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}>
        Модель
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}>
          <Image src={'/icons/arrow-down-icon.png'} alt="arrow-down-icon" width={20} height={10} />
        </motion.div>
      </motion.button>
      <motion.ul
        className="flex flex-col gap-1 absolute bg-[#444] w-full top-16 left-0"
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
        {[...new Array(5)].map((_, index) => (
          <motion.li
            key={index}
            className="pl-4 py-2 hover:bg-[#1e1e1e] cursor-pointer transition-all"
            variants={itemVariants}>
            Модель {index + 1}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
