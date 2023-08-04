"use client";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useFetchLocation, useFetchWeather } from "@/hooks";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const userLocation = useFetchLocation();
  const [weather, refetch] = useFetchWeather(userLocation);
  
  return weather ? (
    <main className="text-gray-50 flex flex-col items-center gap-5">
      <div className="flex ml-10 gap-1 self-baseline ">
        <span className="text-center">°C </span>
        <Switch className="bg-green" />
        <span className="text-center">°F</span>
      </div>
      <SearchBar
        type="text"
        placeholder="Search Location"
        search={search}
        setSearch={setSearch}
        refetch={refetch}
      />
      <WeatherCard weather={weather} />
      <div className="w-full mb-10 px-14 pb-3 flex gap-5 overflow-x-scroll">
        {weather.forecast &&
          weather.forecast.forecastday[0].hour.map((hour) => {
            const currentHour = format(new Date(hour.time), "HH:mm");
            return (
              <Card
                className="min-w-[100px] h-20 bg-gradient-to-t from-zinc-700 to-purple/80 border-purple text-zinc-50 flex flex-col items-center justify-center"
                key={hour.time}
              >
                {currentHour}
                <Image src={"https:" + hour.condition.icon} alt={"condition"} width={30} height={30} />
                {hour.temp_c}°
              </Card>
            );
          })}
      </div>
    </main>
  ) : (
    <p>carregando...</p>
  );
}

