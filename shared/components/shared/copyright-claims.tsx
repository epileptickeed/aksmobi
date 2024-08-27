import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const CopyrightClaims: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
      <p className="text-[#BDBDBD] text-[12px]">
        Copyright 2020. Все права защищены
      </p>
      <p className="text-[#BDBDBD] text-[12px]">
        Дизайн, разработка, реклама by Axmobi 8961-098-81-11
      </p>
    </div>
  );
};
