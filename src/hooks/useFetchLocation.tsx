import { LocationType } from "@/lib/types";
import { useEffect, useState } from "react";

export function useFetchLocation() {
  const [data, setData] = useState<LocationType>();

  const handleFetch = async () => {
    const res = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}&fields=city,latitude,longitude`,
      { method: "GET" }
    );
    const response: LocationType = await res.json();

    setData(response);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return data;
}

