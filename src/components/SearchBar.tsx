import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BiSearchAlt } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";

interface props {
  search: string;
  type: string;
  placeholder: string;
  className?: string;
  setSearch: Dispatch<SetStateAction<string>>;
  refetch: (location: string) => void;
}

function SearchBar({ className, placeholder, type, search, setSearch, refetch }: props) {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 && search.length > 4) {
      refetch(search);
    }
  };
  return (
    <div className="absolute w-7/12 flex justify-center">
      <Button
        className=" absolute right-0 rounded-2xl bg-transparent px-5 hover:bg-transparent"
        onClick={() => search.length > 4 && refetch(search)}
      >
        <BiSearchAlt className="text-zinc-500 text-xl text-center" />
      </Button>
      <Input
        type={type}
        placeholder={placeholder}
        className={className + " w-full pl-11 text-purple rounded-2xl "}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;

