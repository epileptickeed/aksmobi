import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { NavSidebar } from "./nav-sidebar";
import { PhoneInfoSidebar } from "./phone-info-sidebar";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <NavSidebar />

      <div className="flex items-center justify-between gap-12">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={50}
          className="lg:p-4"
        />
        <div className="flex items-center justify-between gap-4 max-lg:hidden">
          <Link href={"/"}>Наши услуги</Link>
          <Link href={"/"}>Бренды</Link>
          <Link href={"/"}>Отзывы</Link>
        </div>
      </div>
      <div className="flex items-center justify-around gap-8 max-lg:hidden">
        <p className="text-[28px] font-bold">+8 (343) 311-21-11</p>
        <Button className="border-2 py-6 px-8 rounded-3xl border-white bg-none">
          Доделать БАТОН
        </Button>
      </div>

      <PhoneInfoSidebar />
    </div>
  );
};
