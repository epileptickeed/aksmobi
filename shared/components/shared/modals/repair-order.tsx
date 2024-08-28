'use clietn';

import React from 'react';
import { FilterCheckbox } from '../filter-checkbox';
import { Button } from '../../ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormSentSuccess } from './form-sent-success';
import { Title } from '../title';
import { setFocused } from '@/shared/redux/focusedSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux/store/store';
import { useDispatch } from 'react-redux';

interface FormType {
  name: string;
  phone: number;
  comment?: string;
  checkbox: boolean;
}

export const RepairOrder: React.FC = () => {
  const { focused } = useSelector((state: RootState) => state.focused);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormType>();
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const submit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    dispatch(setFocused('success'));

    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <FormSentSuccess />;
  }

  return (
    <>
      {focused === 'repair' ? (
        <>
          <div>
            <Title
              text="Заполните форму и с вами свяжутся в ближайшее время"
              size="md"
              className="p-8 bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-center text-black font-bold"
            />
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col justify-around flex-1 gap-8 p-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#BDBDBD]">
                ВАШЕ ИМЯ:
              </label>
              <input
                className="[background:none] border-b-[1px] border-[#bdbdbd] outline-none py-2 focus:border-[#ffd800]"
                type="text"
                id="name"
                placeholder="Иван"
                {...register('name', { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-[#BDBDBD]">
                ВАШ ТЕЛЕФОН:
              </label>
              <input
                className="[background:none] border-b-[1px] border-[#bdbdbd] outline-none py-2 focus:border-[#ffd800]"
                type="number"
                id="phone"
                placeholder="+7 (000) 000-00-00"
                {...register('phone', { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="comment" className="text-[#BDBDBD]">
                КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):
              </label>

              <input
                className="[background:none] border-b-[1px] border-[#bdbdbd] outline-none py-2 focus:border-[#ffd800]"
                type="text"
                id="comment"
                placeholder="Введите ваши пожелания"
              />
            </div>

            <FilterCheckbox
              className=""
              text={
                'Я соглашаюсь на обработку персональных данных и с политикой конфиденциальности'
              }
              name="confirm"
              value="confirm"
            />
            <Button onSubmit={() => handleSubmit(submit)} className="font-bold py-7 rounded-3xl">
              Отправить
            </Button>
          </form>
        </>
      ) : undefined}
    </>
  );
};
