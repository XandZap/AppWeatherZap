import Image from "next/image";
import { format } from "date-fns";
import { Card } from "./ui/card";
import { IoLocationSharp } from "react-icons/io5";
import { FaTemperatureLow } from "react-icons/fa";
import { IWeatherType } from "@/lib/types";

interface props {
  className?: string;
  weather: IWeatherType;
}

function WeatherCard({ className, weather }: props) {
  const date = format(new Date(), "MMM d, E");

  return (
    weather.location &&
    weather.current && (
      <Card
        className={
          " mt-3 w-7/12 h-96 px-7 pt-6 border-none flex flex-col justify-between rounded-3xl text-zinc-50 bg-gradient-to-tr from-zinc-600 via-purple to-zinc-800 " +
          className
        }
      >
        <div className="flex items-center">
          {weather.location.region} <IoLocationSharp />
        </div>
        <div className="-mt-16">
          <div className="flex items-center justify-center  text-7xl ">
            <FaTemperatureLow className="w-10 mr-2" />
            <span>{weather.current.feelslike_c}°C</span>
            <Image src={"https:" + weather.current.condition.icon} width={100} height={100} alt="Cloud" />
          </div>
          <div className="underline ">{date}</div>
        </div>

        <div className="flex justify-between pb-3 px-14">
          <div>
            <p>Humidity</p>
            <p>{weather.current.humidity}%</p>
          </div>
          <div>
            <p>Viability</p>
            <p>{weather.current.vis_km}km</p>
          </div>
          <div>
            <p>Air Pressure</p>
            <p>{weather.current.pressure_mb}hPa</p>
          </div>
          <div>
            <p>Wind</p>
            <p>{weather.current.wind_kph}kph</p>
          </div>
        </div>
      </Card>
    )
  );
}

export default WeatherCard;

