import Image from 'next/image';
import React from 'react';
import { Title } from '../title';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store/store';

interface Props {
  className?: string;
}

export const FormSentSuccess: React.FC<Props> = ({ className }) => {
  const { focused } = useSelector((state: RootState) => state.focused);
  return (
    <>
      {focused === 'success' ? (
        <div className="p-8 flex flex-col items-center justify-center gap-8">
          <Title text="Спасибо за заявку!" size="md" className="font-bold pb-4" />
          <Image
            src={'/success.png'}
            alt="success-icon"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
          <p className="text-[#bdbdbd] text-[16px]">Наш менеджер свяжется с Вами</p>
        </div>
      ) : (
        'hello'
      )}
    </>
  );
};
