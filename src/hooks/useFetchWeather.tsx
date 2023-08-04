import { IWeatherType, LocationType } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";

const baseUrl = "https://api.weatherapi.com/v1/forecast.json?q=";

export const revalidate = 60;

export function useFetchWeather(
  q: LocationType | undefined
): [IWeatherType | undefined, (location: string) => void] {
  const [data, setData] = useState<IWeatherType>();

  const refetch = (location: string) => {
    handleFetch(location);
  };

  const handleFetch = useCallback(
    async (location?: string) => {
      if (q === undefined && location === undefined) return;
      try {
        const res = await fetch(
          `${baseUrl}${location ? location : `${q?.latitude},${q?.longitude}`}&days=1&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
          {
            method: "GET",
            cache: "force-cache",
          }
        );

        if (res.status !== 200) throw new Error(await res.json());

        const response: IWeatherType = await res.json();

        setData(response);
      } catch (e: any) {
        if (!q?.latitude) return;
        return alert("Erro ao encontrar sua localização.");
      }
    },
    [q]
  );

  useEffect(() => {
    handleFetch();
  }, [q, handleFetch]);

  return [data, refetch];
}

