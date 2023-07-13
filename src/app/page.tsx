import Carousel from "@/components/Carousel";
import SearchBar from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <main className="text-gray-50 flex flex-col items-center gap-5">
      <div className="flex ml-10 gap-1 self-baseline">
        <span className="text-center">°C </span>
        <Switch className="bg-green" />
        <span className="text-center">°F</span>
      </div>
      <SearchBar type="text" placeholder="Search Location" />
      <Carousel />
      <div>daily weather</div>
    </main>
  );
}

