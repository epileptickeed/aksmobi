import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
  text: string;
  imageUrl: string;
  id: number;
}

export const FrameCard: React.FC<Props> = ({ className, text, imageUrl, id }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between rounded-xl shadow-xl bg-[#1E1E1E] relative max-lg:p-4 max-lg:w-[200px] flex-1',
        className,
      )}>
      <div className="absolute shadow-xl p-1 flex items-center justify-center rounded-lg text-[24px] text-[#BDBDBD] font-bold w-[50px] h-[50px] top-[-7%] left-[-7%] bg-[#1E1E1E]">
        0{id + 1}
      </div>
      <Image
        className="self-center p-2 pointer-events-none"
        src={imageUrl}
        alt="Уточняем проблему и проводим диагностику"
        width={210}
        height={210}
      />
      <div className="w-full shadow-[0px_-16px_20px_0px_#00000050] h-[70px] flex items-center justify-center ">
        <p className="text-[#BDBDBD] text-center">{text}</p>
      </div>
    </div>
  );
};
