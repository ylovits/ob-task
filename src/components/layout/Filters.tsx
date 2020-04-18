import React from "react";
import { productSizes, productColors } from "../../utils/constants";
import ProductFilter from "../ProductFilter";

const Filters = () => {
  return (
    <div className="filters bg-dark w-100">
      <div className="filters-inner py-3 container">
        <ProductFilter values={productColors} filterType="color" />
        <ProductFilter values={productSizes} filterType="size" />
      </div>
    </div>
  );
};

export default Filters;
