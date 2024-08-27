'use client';

import React from 'react';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const ChooseYourModel: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn('flex flex-col items-center justify-center gap-12', className)}>
      <Title text="Выберите модель" size="2xl" />
      <Title text="Выберите свою модель" size="sm" />
      <div className="grid grid-cols-4 gap-4">
        {open
          ? [...new Array(12)].map((_, index) => (
              <div className="bg-[#1e1e1e] px-4 rounded-xl" key={index}>
                <p className="p-6 font-bold text-[16px] text-center">20 Pro 8/256Gb Phantom Blue</p>
                <Image
                  src={'/thumbnail-model.png'}
                  alt="choose-your-model"
                  width={270}
                  height={190}
                />
              </div>
            ))
          : [...new Array(8)].map((_, index) => (
              <div className="bg-[#1e1e1e] px-4 rounded-xl" key={index}>
                <p className="p-6 font-bold text-[16px] text-center">20 Pro 8/256Gb Phantom Blue</p>
                <Image
                  src={'/thumbnail-model.png'}
                  alt="choose-your-model"
                  width={270}
                  height={190}
                />
              </div>
            ))}
      </div>
      <Button onClick={() => setOpen(!open)} className="px-14 py-6 font-bold rounded-3xl">
        {open ? 'Меньше' : 'Показать еще'}
      </Button>
    </div>
  );
};
