import React from 'react';
import Image from 'next/image';
import { Title } from '../title';

export const OurServicesInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-8 max-lg:grid-cols-1 max-lg:overflow-hidden">
      <div className="bg-[#1e1e1e] rounded-xl z-10 relative overflow-hidden">
        <div className="p-4 flex flex-col gap-4 justify-between ">
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
        </div>
        <Image
          src={'/motherboard.png'}
          alt="motherboard"
          width={345}
          height={288}
          className="absolute z-[0] left-[54%] bottom-[-25%] scale-[.7] max-lg:left-[20%] max-lg:bottom-[-15%]"
        />
      </div>

      <div className="bg-[#1e1e1e] rounded-xl relative overflow-hidden">
        <div className="p-4 flex flex-col gap-4 justify-between h-full">
          <Title text="Ознакомится с более точными ценами" size="md" />
          <div className="flex items-center gap-6">
            <Image src={'/icons/phone-icon.png'} alt="phone-icon" width={20} height={20} />
            <p className="bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-[24px] font-bold inline-block text-transparent bg-clip-text">
              89610988111
            </p>
          </div>
        </div>
        <Image
          src={'/broken-phone.png'}
          alt="broken-phone"
          width={215}
          height={200}
          className="absolute z-[0] top-0 right-[-5%] max-lg:right-[-20%]"
        />
      </div>

      <div className=" relative col-span-2 overflow-hidden rounded-xl max-lg:col-span-1">
        <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4 justify-between z-30">
          <Title text="Покупайте запчасти онлайн" size="md" className="z-30" />
          <p>Комплектующие на различные девайсы прямо со склада</p>
          <div className="flex items-center gap-4">
            <p className="bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-[24px] font-bold inline-block text-transparent bg-clip-text">
              Посмотреть
            </p>
            <Image src={'/arrow-gradient.png'} alt="arrow" width={57} height={10} />
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
  );
};
