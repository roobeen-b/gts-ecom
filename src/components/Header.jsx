/* eslint-disable react/prop-types */
import { Search, ShoppingCart, Trash2, User2Icon } from "lucide-react";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { GlobalContext } from "@/context/GlobalContext";

const Header = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeItemFromCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);

  const totalQuantity =
    cartItems && cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalOrderAmount =
    cartItems &&
    cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <header className="flex px-2 md:px-4 lg:px-6 py-4 bg-white shadow-md justify-between items-center">
      <div onClick={() => navigate("/")}>
        <h1 className="text-2xl font-bold cursor-pointer">EStore</h1>
      </div>
      <div className="hidden md:block w-full md:w-[300px] lg:w-[450px]">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button size="icon" variant="ghost" className="md:hidden">
          <Search onClick={() => navigate("/search")} />
        </Button>
        <Button
          className="relative"
          variant="ghost"
          onClick={() => setOpen(true)}
          size="icon"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItems.length > 0 && (
            <div className="absolute top-0 right-2 bg-yellow-400 w-4 h-4 rounded-full flex justify-center items-center p-1">
              {totalQuantity}
            </div>
          )}
        </Button>
        <Button size="icon" variant="outline" className="rounded-full">
          <User2Icon />
        </Button>
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader className="text-start">
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                  <div
                    className="bg-gray-200 text-black p-3 rounded mb-2"
                    key={cartItem.productName}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-md font-medium tracking-wide">
                          {cartItem.productName}
                        </h1>
                        <p className="text-xs font-medium tracking-wide">
                          {cartItem.quantity}x &nbsp; &nbsp;
                          <span className="text-gray-500">
                            @ ${cartItem.price.toFixed(2)}
                          </span>
                          &nbsp; &nbsp;
                          <span className="text-[#6A3006]">
                            ${(cartItem.quantity * cartItem.price).toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeItemFromCart(cartItem)}
                      >
                        <Trash2 className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="flex gap-4 mt-2 items-center">
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full p-0 outline outline-1 outline-black w-6 h-6"
                        onClick={() => decrementCartItemQuantity(cartItem)}
                      >
                        -
                      </Button>
                      <p>{cartItem.quantity}</p>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full p-0 outline outline-1 outline-black w-6 h-6"
                        onClick={() => incrementCartItemQuantity(cartItem)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No Items added</div>
              )}
            </SheetDescription>
          </SheetHeader>
          {cartItems && cartItems.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-xl font-semibold">Order Total</h1>
                <h1 className="text-2xl font-bold">
                  ${totalOrderAmount.toFixed(2)}
                </h1>
              </div>
              <Button className="rounded-full w-full mt-4">
                Confirm Order
              </Button>
            </>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
