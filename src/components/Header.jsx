import { ShoppingCart, User2Icon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex px-2 md:px-4 lg:px-6 py-4 bg-white shadow-md justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">EStore</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <ShoppingCart />
        <div className="border border-black rounded-full">
          <User2Icon />
        </div>
      </div>
    </header>
  );
};

export default Header;
