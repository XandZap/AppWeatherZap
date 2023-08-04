import { LocationType } from "@/lib/types";
import { useEffect, useState } from "react";

export function useFetchLocation() {
  const [data, setData] = useState<LocationType>();

  const handleFetch = async () => {
    const res = await fetch("http://ip-api.com/json/?fields=status,city,lat,lon", { method: "GET" });
    const response = await res.json();
    if (response.status === "fail") handleFetch();
    else setData(response);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return data;
}

