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
      try {
        const res = await fetch(
          `${baseUrl}${location ? location : `${q?.lat},${q?.lon}`}&days=1&key=e2c30d874db049fb8f4175352230408`,
          {
            method: "GET",
            cache: "force-cache",
          }
        );

        if (res.status !== 200) throw new Error(await res.json());

        const response: IWeatherType = await res.json();

        setData(response);
      } catch (e: any) {
        if (!q?.lat) return;
        return alert("Erro ao encontrar sua localização.");
      }
    },
    [q?.lat, q?.lon]
  );

  useEffect(() => {
    if ((q && q.lat && q.lon) || location) handleFetch();
  }, [q, handleFetch]);

  return [data, refetch];
}

