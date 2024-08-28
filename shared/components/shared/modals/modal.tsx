import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from '../title';
import { X } from 'lucide-react';
import { RepairOrder } from './repair-order';
import { ServicesOrder } from './services-order';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store/store';
import { setFocused } from '@/shared/redux/focusedSlice';
import { useDispatch } from 'react-redux';

interface Props {
  className?: string;
}

export const Modal: React.FC<Props> = ({ className }) => {
  const { focused } = useSelector((state: RootState) => state.focused);
  const dispatch = useDispatch();
  return (
    <>
      {focused && (
        <div
          className={cn(
            'bg-gradient-to-r shadow-xl from-[#292929] to-[#3c3c3c] overflow-hidden fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 m-auto z-[40] bg-[#1e1e1e] max-h-[100%] max-w-[470px] rounded-2xl',
            className,
          )}>
          <X
            className="text-black cursor-pointer absolute right-2 top-2"
            onClick={() => dispatch(setFocused(''))}
          />
          {focused === 'repair' ? <RepairOrder /> : undefined}
          {focused === 'services' ? <ServicesOrder /> : undefined}
          {/* {focused === 'repair' ? <RepairOrder focused={focused} /> : undefined} */}
        </div>
      )}
    </>
  );
};
