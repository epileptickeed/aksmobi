import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-between p-6">
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
        <Button className="p-6 rounded-3xl bg-none outline text-white outline-white">
          Перезвонить мне
        </Button>
      </div>
    </div>
  );
};
