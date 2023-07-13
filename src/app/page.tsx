import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <main className="text-gray-50 flex flex-col items-center gap-5">
      <div className="flex ml-10 gap-1 self-baseline">
        <span className="text-center">C° </span>
        <Switch className="bg-green" />
        <span className="text-center">F°</span>
      </div>
      <Input type="text" placeholder="Search" className="w-96 text-purple"/>
      <div>Weather Card Carrousel</div>
      <div>daily weather</div>
    </main>
  );
}

