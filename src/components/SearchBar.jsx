import { useContext } from "react";
import { Input } from "./ui/input";
import { GlobalContext } from "@/context/GlobalContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <Input
        placeholder="Search for Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
