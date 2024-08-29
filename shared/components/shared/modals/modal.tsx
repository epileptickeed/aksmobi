'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { X } from 'lucide-react';
import { RepairOrder } from './repair-order';
import { ServicesOrder } from './services-order';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store/store';
import { setFocused } from '@/shared/redux/focusedSlice';
import { useDispatch } from 'react-redux';
import { FormSentSuccess } from './form-sent-success';
import { ParsingOrder } from './parsing-order';

interface Props {
  className?: string;
}

export interface FormType {
  name: string;
  phone: number;
  comment?: string;
  checkbox: boolean;
}

export const Modal: React.FC<Props> = ({ className }) => {
  const { focused } = useSelector((state: RootState) => state.focused);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  console.log(focused);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setFocused(''));
    setFormSubmitted(false);
  };

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
            onClick={() => closeModal()}
          />
          {focused === 'repair' ? <RepairOrder setFormSubmitted={setFormSubmitted} /> : undefined}
          {focused === 'services' ? (
            <ServicesOrder setFormSubmitted={setFormSubmitted} />
          ) : undefined}
          {focused === 'parsing' ? <ParsingOrder setFormSubmitted={setFormSubmitted} /> : undefined}
          {formSubmitted && <FormSentSuccess />}
        </div>
      )}
    </>
  );
};
