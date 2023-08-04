import React from "react";
import weatherIcon from "@/assets/image/weatherIcon.png";
import Image from "next/image";
import Navigation from "./Navigation";
import Clock from "./Clock";

const navigation = [
  {
    href: "https://xandzapportfolio.vercel.app/",
    name: "My Portfolio",
  },
];

function Header() {
  return (
    <header>
      <Image className="-mb-5 max-sm:mt-5 ml-5" src={weatherIcon} alt="WeatherZap Icon" />
      <div className="flex flex-row justify-between mx-14 mb-7 text-gray-50 max-sm:justify-center">
        <div className="text-4xl flex flex-col ">
          <p className="max-sm:hidden">WeatherZap</p>
          <Clock />
        </div>
        <Navigation navigation={navigation} />
      </div>
    </header>
  );
}

export default Header;

