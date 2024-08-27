import React from 'react';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
interface Props {
  className?: string;
}

export const OurServices: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-12 mt-24', className)}>
      <Title text="Наши услуги" size="xl" className="font-bold" />
      <Title
        text="Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги"
        size="sm"
      />
      <div className="grid grid-cols-4 gap-14">
        {[...new Array(10)].map((_, index) => (
          <div
            key={index}
            className="h-[200px] bg-[#1e1e1e] rounded-xl p-4 flex flex-col justify-between">
            <p>Замена light сенсора на телефоне</p>
            <div className="flex items-center justify-between">
              <p>1-3 дня</p>
              <p>1 000 - 3 000 ₽</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 w-full gap-4 ">
        <div className="bg-[#1e1e1e] rounded-xl p-4 flex flex-col gap-4 justify-between z-10 relative overflow-hidden">
          <Title text="Слишком сильные повреждения?" size="md" />
          <p>
            Сдайте ваше устройство на запчасти обратившись
            <br /> в наш сервис
          </p>
          <div className="flex items-center w-full gap-4">
            <p className="bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-[24px] font-bold inline-block text-transparent bg-clip-text">
              Разобрать на запчасти
            </p>
            <Image src={'/arrow-gradient.png'} alt="arrow" width={57} height={10} />
          </div>
          <Image
            src={'/motherboard.png'}
            alt="motherboard"
            width={345}
            height={288}
            className="absolute z-[0] left-[54%] bottom-[-20%] scale-[.7]"
          />
        </div>

        <div className="bg-[#1e1e1e] rounded-xl p-4 flex flex-col gap-4 justify-between relative">
          <Title text="Ознакомится с более точными ценами" size="md" />
          <div className="flex items-center gap-6">
            <Image src={'/icons/phone-icon.png'} alt="phone-icon" width={20} height={20} />
            <p className="bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-[24px] font-bold inline-block text-transparent bg-clip-text">
              89610988111
            </p>
          </div>
          <Image
            src={'/broken-phone.png'}
            alt="broken-phone"
            width={215}
            height={200}
            className="absolute z-[0] right-[-5%]"
          />
        </div>

        <div className=" relative col-span-2 overflow-hidden rounded-xl">
          <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4 justify-between z-30">
            <Title text="Ознакомится с более точными ценами" size="md" />
            <div className="flex items-center gap-6">
              <Image src={'/icons/phone-icon.png'} alt="phone-icon" width={20} height={20} />
              <p className="bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-[24px] font-bold inline-block text-transparent bg-clip-text">
                89610988111
              </p>
            </div>
          </div>
          <Image
            src={'/zavod.png'}
            alt="zavod"
            width={648}
            height={346}
            className="absolute z-[0] top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};
