"use client";
import WeatherCard from "./WeatherCard";
import { Card } from "./ui/card";

interface props {
  children?: React.ReactNode;
}

function Carousel({ children }: props) {
  return (
    <div className="relative flex justify-center items-center w-screen">
      <WeatherCard className="absolute -left-[40%] w-7/12 h-96 text-zinc-800 bg-gradient-to-tr from-blue-100 via-blue-400 to-blue-700"></WeatherCard>
      <WeatherCard></WeatherCard>
      <WeatherCard className="absolute -right-[40%] w-7/12 h-96 text-zinc-800 from-blue-100 via-blue-400 to-blue-700"></WeatherCard>
    </div>
  );
}

export default Carousel;

