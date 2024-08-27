import React from 'react';
import { Title } from '../title';
import Image from 'next/image';
import { data } from './data';
import { FrameCard } from './frame-card';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const HowDoWeWork: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mt-24 text-center', className)}>
      <Title className="font-bold" text="Как мы работаем?" size="2xl" />
      <div className="flex gap-12 my-14">
        {data.map((item, index) => (
          <FrameCard text={item.text} imageUrl={item.image} id={index} />
        ))}
      </div>
    </div>
  );
};
