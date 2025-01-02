/* eslint-disable react/prop-types */
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const ProductCard = ({ product }) => {
  const {
    cartItems,
    addItemToCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(GlobalContext);

  const currentProductInCartIndex =
    cartItems &&
    cartItems.findIndex((item) => item.productName === product.productName);

  const isCurrentProductInCart = currentProductInCartIndex > -1;

  return (
    <div className="bg-white rounded">
      <div className="rounded h-[150px]">
        <img
          src={product.thumbnail}
          alt={product.productName}
          className="w-full h-full object-cover rounded-t"
        />
      </div>
      <div className="p-4 flex flex-col">
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="text-xl">{product.productName}</p>
        <p className="text-[#6A3006] text-lg">${product.price}</p>
        {isCurrentProductInCart ? (
          <div className="bg-[#6A3006] text-white mt-4 border border-white rounded-full h-[40px]">
            <div className="flex gap-4 mt-2 items-center justify-around">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-[0.5px] border-white w-6 h-6 bg-[#6A3006]"
                onClick={() =>
                  decrementCartItemQuantity(
                    cartItems[currentProductInCartIndex]
                  )
                }
              >
                -
              </Button>
              <p>{cartItems[currentProductInCartIndex].quantity}</p>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-[0.5px] border-white w-6 h-6 bg-[#6A3006]"
                onClick={() =>
                  incrementCartItemQuantity(
                    cartItems[currentProductInCartIndex]
                  )
                }
              >
                +
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="bg-white text-black h-[40px] hover:bg-[#6A3006] hover:text-white mt-4 border border-[#6A3006] rounded-full"
            onClick={() => addItemToCart(product)}
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
