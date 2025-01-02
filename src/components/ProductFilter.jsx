/* eslint-disable react/prop-types */
import { categories } from "@/data/categories";
import { Checkbox } from "./ui/checkbox";

const ProductFilter = ({ filters, handleFilter }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded">
      <h1 className="text-xl font-semibold">Filters</h1>
      <div className="">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category} className="flex gap-3 items-center">
              <Checkbox
                checked={filters && filters.includes(category)}
                onCheckedChange={() => handleFilter(category)}
              />
              <p>{category}</p>
            </div>
          ))
        ) : (
          <div>No categories available.</div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
