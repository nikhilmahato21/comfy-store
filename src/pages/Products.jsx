import { LuSettings2 } from "react-icons/lu";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ request }) => {
  const response = await customFetch("/products");
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center  mb-3">
        <button
          className="btn btn-ghost btn-circle btn-md ml-auto p-3"
          onClick={() => {
            setIsFilterOpen(!isFilterOpen);
          }}
        >
          <LuSettings2 className="h-6 w-6" />
        </button>
      </div>
      {isFilterOpen && <Filters />}
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
