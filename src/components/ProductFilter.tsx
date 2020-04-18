import React from "react";
import FilterItem from "./UI/FilterItem";

interface IProps {
  values: string[];
  filterType: string;
}

const ProductFilter = ({ values, filterType }: IProps) => {
  return (
    <div
      className={`${filterType}-filter filter text-white w-100 px-3 m-0 align-items-center d-flex my-2`}
    >
      <div className="filter-name">Filter by {filterType}: </div>
      <div className="filter-items">
        {values.map((filterItem, i) => {
          return (
            <FilterItem
              key={i}
              filterItem={filterItem}
              filterType={filterType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
