'use client';

import { cn } from '@/shared/lib/utils';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { reviews_data } from '@/shared/data/reviews-data';
import { Title } from './title';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const ReviewsCarousel: React.FC<Props> = ({ className }) => {
  const [width, setWidth] = React.useState(0);
  const slider_wrapper = useRef<any>(null);

  React.useEffect(() => {
    setWidth(slider_wrapper?.current.scrollWidth - slider_wrapper?.current.offsetWidth);
  }, []);

  return (
    <div className={cn('flex items-center justify-between w-full h-full flex-col mt-6', className)}>
      <div className="w-[60%] mb-[2vw] sm:w-[95%]">
        <Title text="Отзывы" size="xl" className="text-center pt-4" />
      </div>
      <motion.div
        className="w-[80%] overflow-hidden p-4 flex sm:w-full "
        ref={slider_wrapper}
        whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          className="inline-flex gap-4 "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}>
          {reviews_data.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e1e1e] rounded-3xl p-8 w-[400px] flex flex-col gap-4 max-lg:w-[250px]">
              <div className="flex items-center gap-4">
                <Image src={item.imageUrl} alt="avatar" width={55} height={55} />
                <Title text={`${item.name}`} size="xs" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
