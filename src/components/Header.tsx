import React from "react";
import weatherIcon from "@/assets/images/weatherIcon.png";
import Image from "next/image";
import { format } from "date-fns";
import Link from "./Link";

function Header() {
  const time = format(new Date(), "HH:mm aaa");
  return (
    <header>
      <Image className="-mb-5" src={weatherIcon} alt="WeatherZap Icon" />
      <div className="flex flex-row justify-between mx-14 mb-20 text-gray-50">
        <div className="text-4xl flex flex-col">
          <p className="">WeatherZap</p>
          <p className="text-right text-sm">{time}</p>
        </div>
        <div className="flex flex-row justify-between gap-x-8 text-xl mr-20">
          <Link href={"#"}>Today</Link>
          <Link href={"#"}>Tomorrow</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

