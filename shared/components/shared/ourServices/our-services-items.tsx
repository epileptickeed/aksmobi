import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  text: string;
  dayFrom: number;
  dayTo: number;
  priceFrom: number;
  priceTo: number;
  id: number;
  picked: number;
  onClick: () => void;
  setFocused: () => void;
}

export const OurServicesItems: React.FC<Props> = ({
  className,
  text,
  dayFrom,
  dayTo,
  priceFrom,
  priceTo,
  id,
  picked,
  onClick,
  setFocused,
}) => {
  const handleClick = () => {
    onClick();
    setFocused();
  };

  return (
    <div
      className={cn(
        "max-h-full bg-[#1e1e1e] rounded-xl p-4 flex flex-col gap-12 justify-between cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <p
        className={
          picked === id
            ? "bg-gradient-to-r from-[#ff4c00] to-[#ffd800] inline-block text-transparent bg-clip-text transition-all"
            : ""
        }
      >
        {text}
      </p>
      <div className="flex items-center justify-between hover:">
        <p
          className={
            picked === id
              ? "bg-gradient-to-r from-[#ff4c00] to-[#ffd800] inline-block text-transparent bg-clip-text transition-all"
              : ""
          }
        >
          {dayFrom}-{dayTo} дня
        </p>
        <p
          className={
            picked === id
              ? "bg-gradient-to-r from-[#ff4c00] to-[#ffd800] inline-block text-transparent bg-clip-text transition-all"
              : ""
          }
        >
          {priceFrom} - {priceTo} ₽
        </p>
      </div>
    </div>
  );
};
