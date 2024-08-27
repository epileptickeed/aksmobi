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
    <div className={cn("flex flex-col items-center my-32 gap-8", className)}>
      <Title
        text={`${title}`}
        size="2xl"
        className="max-w-[70%] font-bold text-center"
      />
      <p className="max-w-[47%] text-center text-[24px]">{text}</p>
      <div className="flex items-center gap-8">
        <input
          type="text"
          placeholder="Имя"
          className="bg-[#1e1e1e] rounded-3xl p-4"
        />
        <input
          type="phone"
          placeholder="+7 ... ... .. .."
          className="bg-[#1e1e1e] rounded-3xl p-4"
        />
        <Button className="font-bold rounded-3xl p-8 px-12">
          Перезвонить мне
        </Button>
      </div>
    </div>
  );
};
