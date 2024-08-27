import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "../title";
import { X } from "lucide-react";
import { FilterCheckbox } from "../filter-checkbox";
import { Button } from "../../ui";

interface Props {
  className?: string;
  focused: boolean;
  setFocused: (value: boolean) => void;
}

export const RepairOrder: React.FC<Props> = ({
  className,
  focused,
  setFocused,
}) => {
  return (
    <>
      {focused && (
        <div
          className={cn(
            "bg-gradient-to-r from-[#292929] to-[#3c3c3c] overflow-hidden fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 m-auto z-[40] bg-[#1e1e1e] min-h-[588px] max-w-[470px] rounded-2xl",
            className
          )}
        >
          <X
            className="text-black cursor-pointer absolute right-2 top-2"
            onClick={() => setFocused(false)}
          />
          <div>
            <Title
              text="Заполните форму и с вами свяжутся в ближайшее время"
              size="md"
              className="p-8 bg-gradient-to-r from-[#ff4c00] to-[#ffd800] text-center text-black font-bold"
            />
          </div>
          <div className="flex flex-col justify-around flex-1 gap-8 p-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#BDBDBD]">
                ВАШЕ ИМЯ:
              </label>
              <input
                className="[background:none] border-b-[1px] border-[#bdbdbd] outline-none py-2 focus:border-[#ffd800]"
                type="text"
                id="name"
                placeholder="Иван"
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
                "Я соглашаюсь на обработку персональных данных и с политикой конфиденциальности"
              }
              value={"confirm"}
              name="confirm"
            />
            <Button className="font-bold py-7 rounded-3xl">Отправить</Button>
          </div>
        </div>
      )}
    </>
  );
};
