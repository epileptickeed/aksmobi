import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between p-6', className)}>
      <div className="flex items-center justify-around gap-4">
        <Image src={'/icons/key-icon.png'} alt="key-icon" width={45} height={45} />
        <p>Ремонт и консультация на месте</p>
      </div>
      <div className="flex items-center justify-around gap-4">
        <Image src={'/icons/discount-icon.png'} alt="key-icon" width={45} height={45} />
        <p>Нет скрытых платежей и переплат</p>
      </div>
      <div className="flex items-center justify-around gap-4">
        <Image src={'/icons/settings-icon.png'} alt="key-icon" width={45} height={45} />
        <p>Собственный склад запчастей</p>
      </div>
    </div>
  );
};
