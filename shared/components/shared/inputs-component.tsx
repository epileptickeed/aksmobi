import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  className?: string;
  title: string;
  text: string | React.ReactNode;
}

export const InputsComponent: React.FC<Props> = ({
  className,
  title,
  text,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center my-32 gap-8 max-lg:my-16",
        className
      )}
    >
      <Title
        text={`${title}`}
        size="2xl"
        className="max-w-[70%] font-bold text-center max-lg:text-[20px]"
      />
      <p className="max-w-[47%] text-center text-[24px] max-lg:text-[14px]">
        {text}
      </p>
      <div className="flex items-center gap-8 max-lg:flex-col max-lg:w-full max-lg:p-4">
        <input
          type="text"
          placeholder="Имя"
          className="bg-[#1e1e1e] rounded-3xl p-4 max-lg:w-full"
        />
        <input
          type="phone"
          placeholder="+7 ... ... .. .."
          className="bg-[#1e1e1e] rounded-3xl p-4 max-lg:w-full"
        />
        <Button className="font-bold rounded-[5rem] p-8 px-12 max-lg:w-full">
          Перезвонить мне
        </Button>
      </div>
    </div>
  );
};
