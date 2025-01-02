import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { GlobalContext } from "@/context/GlobalContext";
import { allProducts } from "@/data/products";
import { useContext, useEffect, useState } from "react";

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { searchQuery } = useContext(GlobalContext);

  useEffect(() => {
    if (searchQuery === undefined || searchQuery === "") {
      setFilteredProducts([]);
    } else if (searchQuery && searchQuery !== "") {
      const filteredItems =
        allProducts &&
        allProducts.filter((item) =>
          item.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );

      setFilteredProducts(filteredItems);
    }
  }, [searchQuery]);

  return (
    <div className="px-2 md:px-4 lg:px-6 py-4 grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-screen">
      <div className="flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-2xl font-bold">Search for Products</h1>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.productName} product={product} />
            ))
          ) : (
            <div>No products found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
