"use client";

import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { RepairOrder } from "./modals/repair-order";

interface Props {
  className?: string;
}

export const Poster: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <RepairOrder focused={focused} setFocused={setFocused} />
      <div className={cn("flex items-center justify-between ", className)}>
        <div className="flex flex-col items-start justify-between gap-4 w-[60%]">
          <h1 className="text-[52px] font-bold">
            Ремонт <span className="text-[#ffd800]">REALMI</span> в
            Екатеринбурге любой сложности
          </h1>
          <p>
            Ремонтируем устройства любой сложности в кратчайшие сроки и с
            гарантией до 3 месяцев
          </p>
          <Button
            onClick={() => setFocused(true)}
            className="rounded-3xl px-16 py-7 cursor-pointer font-bold"
          >
            Заказать ремонт
          </Button>
        </div>
        <div className="w-[40%]">
          <Image
            src={"/poster-phone.png"}
            alt="poster-phone"
            width={549}
            height={627}
          />
        </div>
      </div>
    </>
  );
};
