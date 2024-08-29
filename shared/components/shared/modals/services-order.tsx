import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormType } from './modal';
import { setFocused } from '@/shared/redux/focusedSlice';
import { Button } from '../../ui';
import { FilterCheckbox } from '../filter-checkbox';
import { Title } from '../title';

interface Props {
  className?: string;
  setFormSubmitted: (value: boolean) => void;
}

export const ServicesOrder: React.FC<Props> = ({ className, setFormSubmitted }) => {
  const { register, handleSubmit } = useForm<FormType>();
  const dispatch = useDispatch();

  const submit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    dispatch(setFocused('success'));
    setFormSubmitted(true);
  };
  return (
    <>
      <div>
        <Title
          text="Заполните форму и с вами свяжутся в ближайшее время"
          size="md"
          className="p-8 max-lg:p-6 bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-center text-black font-bold max-lg:text-[14px]"
        />
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col justify-around flex-1 gap-8 p-8 max-lg:p-4 max-lg:gap-4">
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

        <div className="bg-[#1e1e1e] p-4 rounded-xl">
          <Title text="Замена light сенсора на телефоне" size="sm" className="max-lg:text-[14px]" />
          <p className="max-lg:text-[12px]">Apple, смартфон</p>
        </div>

        <FilterCheckbox
          className=""
          text={'Я соглашаюсь на обработку персональных данных и с политикой конфиденциальности'}
          name="confirm"
          value="confirm"
        />
        <Button onSubmit={() => handleSubmit(submit)} className="font-bold py-7 rounded-3xl">
          Отправить
        </Button>
      </form>
    </>
  );
};
