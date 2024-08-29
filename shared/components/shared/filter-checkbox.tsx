import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Checkbox } from '../ui';

interface Props {
  className?: string;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<Props> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
  className,
}) => {
  return (
    <div className={cn('flex items-center justify-between space-x-2', className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1 max-lg:text-[12px]">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
