/* eslint-disable react/prop-types */
import { Search, ShoppingCart, User2Icon } from "lucide-react";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex px-2 md:px-4 lg:px-6 py-4 bg-white shadow-md justify-between items-center">
      <div onClick={() => navigate("/")}>
        <h1 className="text-2xl font-bold">EStore</h1>
      </div>
      <div className="hidden md:block w-full md:w-[300px] lg:w-[450px]">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="md:hidden">
          <Search onClick={() => navigate("/search")} />
        </div>
        <ShoppingCart />
        <div className="border border-black rounded-full">
          <User2Icon />
        </div>
      </div>
    </header>
  );
};

export default Header;
