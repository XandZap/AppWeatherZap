import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BiSearchAlt } from "react-icons/bi";

interface props {
  type: string;
  placeholder: string;
  className?: string;
}

function SearchBar({ className, placeholder, type }: props) {
  return (
    <div className="relative w-7/12 flex justify-center">
      <Button className=" absolute rounded-2xl bg-transparent px-5 hover:bg-transparent">
        <BiSearchAlt className="text-zinc-500 text-xl text-center" />
      </Button>
      <Input
        type={type}
        placeholder={placeholder}
        className={className + " w-full pl-11 text-purple rounded-2xl "}
      />
    </div>
  );
}

export default SearchBar;

