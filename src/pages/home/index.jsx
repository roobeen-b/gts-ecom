import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/context/GlobalContext";
import { allProducts } from "@/data/products";
import { LucideListFilter } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const [filters, setFilters] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { searchQuery } = useContext(GlobalContext);

  function handleFilter(currentFilter) {
    if (filters && filters.includes(currentFilter)) {
      const newFilters = filters.filter((item) => item !== currentFilter);
      setFilters(newFilters);
    } else {
      setFilters([...filters, currentFilter]);
    }
  }

  useEffect(() => {
    if (searchQuery === undefined || searchQuery === "") {
      setFilteredProducts(allProducts);
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
      <div className="hidden md:block">
        <ProductFilter filters={filters} handleFilter={handleFilter} />
      </div>

      <div className="md:hidden flex justify-end relative">
        <Button
          className="bg-white text-black hover:bg-[#6A3006] hover:text-white "
          onClick={() => setShowMobileFilter(!showMobileFilter)}
        >
          <LucideListFilter />
          Filters
        </Button>
        {showMobileFilter && (
          <div className="absolute right-0 top-12">
            <ProductFilter filters={filters} handleFilter={handleFilter} />
          </div>
        )}
      </div>

      <div className="flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-2xl font-bold">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts
              .filter((item) =>
                filters.length > 0 ? filters.includes(item.category) : item
              )
              .map((product) => (
                <ProductCard key={product.productName} product={product} />
              ))
          ) : (
            <div>No products available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
