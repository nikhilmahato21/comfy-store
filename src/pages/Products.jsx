import { LuSettings2 } from "react-icons/lu";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customFetch("/products", { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = (value) => {
    setIsFilterOpen(value);
  };
  return (
    <>
      {isFilterOpen && <Filters />}
      <ProductsContainer
        isFilterOpen={isFilterOpen}
        toggleFilter={handleFilterToggle}
      />
      <PaginationContainer />
    </>
  );
};

export default Products;
