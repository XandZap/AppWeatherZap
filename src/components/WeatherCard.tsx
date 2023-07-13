import Image from "next/image";
import { format } from "date-fns";
import { Card } from "./ui/card";
import { IoLocationSharp } from "react-icons/io5";
import { FaTemperatureLow } from "react-icons/fa";
import Cloud from "@/assets/svg/Cloud.svg";

interface props {
  className?: string;
}

function WeatherCard({ className }: props) {
  const date = format(new Date(), "MMM d, E");

  return (
    <Card
      className={
        "w-7/12 h-96 px-7 pt-6 border-none flex flex-col justify-between rounded-3xl text-zinc-50 bg-gradient-to-tr from-zinc-600 via-purple to-zinc-800 " +
        className
      }
    >
      <div className="flex items-center">
        Manaus <IoLocationSharp />
      </div>
      <div className="-mt-16">
        <div className="flex items-center justify-center  text-7xl ">
          <FaTemperatureLow className="w-10 mr-2" />
          <span>27°C</span>
          <Image src={Cloud} alt="Cloud" />
        </div>
        <div className="underline ">{date}</div>
      </div>

      <div className="flex justify-between pb-3 px-14">
        <div>
          <p>Humidity</p>
          <p>99%</p>
        </div>
        <div>
          <p>Viability</p>
          <p>8km</p>
        </div>
        <div>
          <p>Air Pressure</p>
          <p>1005hPa</p>
        </div>
        <div>
          <p>Wind</p>
          <p>2mph</p>
        </div>
      </div>
    </Card>
  );
}

export default WeatherCard;

