import React from "react";
import { Title } from "./title";
import Image from "next/image";
import { reviews_data } from "@/shared/data/reviews-data";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const Reviews: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "py-32 flex flex-col items-center gap-12 max-lg:py-8 max-lg:gap-0",
        className
      )}
    >
      <Title text="Отзывы" size="xl" />
      <div className="flex items-center gap-4 max-lg:flex-col max-lg:p-4">
        {reviews_data.map((item) => (
          <div
            key={item.id}
            className="bg-[#1e1e1e] rounded-3xl p-8  flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <Image src={item.imageUrl} alt="avatar" width={55} height={55} />
              <Title text={`${item.name}`} size="xs" />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
