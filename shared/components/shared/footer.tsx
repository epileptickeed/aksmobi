import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { PhoneCall } from "lucide-react";
interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-between p-6 max-lg:flex-col max-lg:border-y-[1px] border-black max-lg:p-0">
      <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:border-b-[1px] border-black max-lg:w-full max-lg:gap-0">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={50}
          className="max-lg:m-4"
        />
        <div className="flex items-center justify-between gap-4 max-lg:flex-col max-lg:border-t-[1px] border-black max-lg:w-full max-lg:p-4">
          <Link href={"/"}>Наши услуги</Link>
          <Link href={"/"}>Бренды</Link>
          <Link href={"/"}>Отзывы</Link>
        </div>
      </div>
      <div className="flex items-center justify-around gap-8 max-lg:flex-col max-lg:w-full max-lg:gap-4 max-lg:py-4">
        <div className="flex gap-2">
          <PhoneCall className="lg:hidden" />
          <p className="text-[28px] font-bold max-lg:text-[14px]">
            +8 (343) 311-21-11
          </p>
        </div>
        <Button className="p-6 rounded-3xl bg-none outline text-white outline-white">
          Перезвонить мне
        </Button>
      </div>
    </div>
  );
};
