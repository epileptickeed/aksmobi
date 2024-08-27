import React from 'react';
import { Title } from './title';
import { cn } from '@/shared/lib/utils';
import { DropdownMenu } from './dropdownMenu/dropdown-menu';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const ModelSearch: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between w-full bg-[#1e1e1e] p-8 px-12 rounded-2xl',
        className,
      )}>
      <Title className="font-bold" text="ПОИСК МОДЕЛИ" size="xs" />
      <DropdownMenu />
      <Button className="shadow-[0px_0px_10px_0px_#4fd1c5] p-2 px-12 rounded-3xl font-bold">
        Поиск
      </Button>
    </div>
  );
};
