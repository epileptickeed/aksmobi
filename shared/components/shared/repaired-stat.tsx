import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const RepairedStat: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "py-4 mt-24 flex items-center justify-between gap-4 max-lg:flex-col-reverse",
        className
      )}
    >
      <blockquote className="border-l-4 m-2 p-2 w-[70%]">
        В своём стремлении улучшить пользовательский опыт мы упускаем, что
        базовые сценарии поведения пользователей формируют глобальную
        экономическую сеть и при этом - ограничены исключительно образом
        мышления. Дальнейшее развитие различных форм деятельности позволяет
        оценить значение благоприятных перспектив. Прежде всего, новая модель
        организационной деятельности играет определяющее значение для
        соответствующих условий активизации. Имеется спорная точка зрения,
        гласящая примерно следующее: непосредственные участники технического
        прогресса неоднозначны и будут объявлены нарушающими общечеловеческие
        нормы этики и морали. Банальные, но неопровержимые выводы, а также
        непосредственные участники технического прогресса и по сей день остаются
        уделом либералов, которые жаждут быть заблокированы в рамках своих
        собственных рациональных ограничений.
      </blockquote>
      <div className="w-[30%] relative flex items-center justify-center h-full">
        <Image
          src={"/circle.png"}
          alt="circle"
          width={210}
          height={210}
          className="absolute"
        />
        <div className="w-[125px] h-[125px] rounded-full bg-[#1e1e1e] z-[3] flex items-center justify-center max-lg:w-[65px] max-lg:h-[65px]">
          <p className="z-10 text-[46px] font-bold bg-gradient-to-r from-[#ff4c00] to-[#ffd800] inline-block text-transparent bg-clip-text max-lg:text-[20px]">
            1500{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
