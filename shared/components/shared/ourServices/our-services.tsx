"use client";

import React from "react";
import { Title } from "../title";
import { cn } from "@/shared/lib/utils";
import { OurServicesData } from "@/shared/data/our-services-data";
import { OurServicesInfo } from "./our-services-info";
import { OurServicesItems } from "./our-services-items";
import { Modal } from "../modals/modal";
import { setFocused } from "@/shared/redux/focusedSlice";
import { useDispatch } from "react-redux";
interface Props {
  className?: string;
}

export const OurServices: React.FC<Props> = ({ className }) => {
  const [picked, setPicked] = React.useState(0);
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-12 mt-24 max-lg:p-4",
        className
      )}
    >
      <Modal />
      <Title text="Наши услуги" size="xl" className="font-bold text-center" />
      <Title
        text="Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги"
        size="sm"
        className="text-center max-lg:text-[14px]"
      />
      <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-1 max-lg:w-full">
        {OurServicesData.map((item) => (
          <OurServicesItems
            {...item}
            key={item.id}
            picked={picked}
            onClick={() => setPicked(item.id)}
            setFocused={() => dispatch(setFocused("services"))}
          />
        ))}
      </div>

      <OurServicesInfo />
    </div>
  );
};
