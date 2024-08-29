'use client';

import React from 'react';
import { Title } from '../title';
import { motion } from 'framer-motion';
import { data } from './data';
import { FrameCard } from './frame-card';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const HowDoWeWork: React.FC<Props> = ({ className }) => {
  const [width, setWidth] = React.useState(0);
  const slider_wrapper = React.useRef<any>(null);

  React.useEffect(() => {
    setWidth(slider_wrapper?.current.scrollWidth - slider_wrapper?.current.offsetWidth);
  }, []);

  return (
    // <div className={cn('flex items-center justify-between w-full h-full flex-col mt-6', className)}>
    //   <div className="w-[60%] mb-[2vw] sm:w-[95%]">
    //     <Title text="Отзывы" size="xl" className="text-center pt-4" />
    //   </div>
    //   <motion.div
    //     className="w-[80%] overflow-hidden p-4 flex sm:w-full "
    //     ref={slider_wrapper}
    //     whileTap={{ cursor: 'grabbing' }}>
    //     <motion.div
    //       className="inline-flex gap-4 "
    //       drag="x"
    //       dragConstraints={{ right: 0, left: -width }}>
    //       {reviews_data.map((item) => (
    //         <div
    //           key={item.id}
    //           className="bg-[#1e1e1e] rounded-3xl p-8 w-[400px] flex flex-col gap-4 max-lg:w-[250px]">
    //           <div className="flex items-center gap-4">
    //             <Image src={item.imageUrl} alt="avatar" width={55} height={55} />
    //             <Title text={`${item.name}`} size="xs" />
    //           </div>
    //           <p>{item.text}</p>
    //         </div>
    //       ))}
    //     </motion.div>
    //   </motion.div>
    // </div>
    <div
      className={cn(
        'mt-24 text-center max-lg:flex max-lg:items-center max-lg:justify-between max-lg:w-full max-lg:h-full max-lg:flex-col',
        className,
      )}>
      <Title className="font-bold max-lg:text-[20px]" text="Как мы работаем?" size="2xl" />
      <motion.div
        className="w-[80%] overflow-hidden p-6 flex sm:w-full "
        ref={slider_wrapper}
        whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inline-flex gap-12 max-lg:gap-4">
          {data.map((item, index) => (
            <FrameCard key={index} text={item.text} imageUrl={item.image} id={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
