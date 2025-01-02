import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
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
        <Button className="bg-white text-black hover:bg-[#6A3006] hover:text-white mt-4 border border-[#6A3006] rounded-full">
          <ShoppingCart />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
