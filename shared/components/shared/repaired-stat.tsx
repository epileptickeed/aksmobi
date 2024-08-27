import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const RepairedStat: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('py-4 mt-24 flex items-center justify-between gap-4', className)}>
      <blockquote className="border-l-4 m-2 p-2 w-[70%]">
        В своём стремлении улучшить пользовательский опыт мы упускаем, что базовые сценарии
        поведения пользователей формируют глобальную экономическую сеть и при этом - ограничены
        исключительно образом мышления. Дальнейшее развитие различных форм деятельности позволяет
        оценить значение благоприятных перспектив. Прежде всего, новая модель организационной
        деятельности играет определяющее значение для соответствующих условий активизации. Имеется
        спорная точка зрения, гласящая примерно следующее: непосредственные участники технического
        прогресса неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали.
        Банальные, но неопровержимые выводы, а также непосредственные участники технического
        прогресса и по сей день остаются уделом либералов, которые жаждут быть заблокированы в
        рамках своих собственных рациональных ограничений.
      </blockquote>
      <div className="w-[30%] relative flex items-center justify-center h-full">
        <Image src={'/circle.png'} alt="circle" width={210} height={210} className="absolute" />
        <svg viewBox="0 0 100 100" className="z-[9]">
          <circle cx="50" cy="50" r="20" />
        </svg>
        <p className="z-10">1500 </p>
      </div>
    </div>
  );
};
