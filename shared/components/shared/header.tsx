import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-between gap-12">
        <Image src={'/logo.png'} alt="logo" width={200} height={50} />
        <div className="flex items-center justify-between gap-4">
          <Link href={'/'}>Наши услуги</Link>
          <Link href={'/'}>Бренды</Link>
          <Link href={'/'}>Отзывы</Link>
        </div>
      </div>
      <div className="flex items-center justify-around gap-8">
        <p className="text-[28px] font-bold">+8 (343) 311-21-11</p>
        <Button className="button-border-gradient">Доделать БАТОН</Button>
      </div>
    </div>
  );
};
