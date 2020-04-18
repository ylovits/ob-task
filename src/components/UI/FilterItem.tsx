import React, { MouseEvent } from "react";
import { COLOR, SIZE } from "../../utils/constants";
import { connect } from "react-redux";
import {
  productsByColor,
  productsBySize,
} from "../../redux/products/productsActions";

interface IProps {
  filterItem: string;
  filterType: string;
  productsByColor: typeof productsByColor;
  productsBySize: typeof productsBySize;
}

const FilterItem = ({
  filterItem,
  filterType,
  productsByColor,
  productsBySize,
}: IProps) => {
  const handleClick = (e: MouseEvent) => {
    if (filterType === COLOR) {
      productsByColor(e.currentTarget.innerHTML);
    } else if (filterType === SIZE) {
      productsBySize(e.currentTarget.innerHTML);
    }
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className="filter-item d-inline-block bg-secondary clickable text-white text-center p-1 m-1"
    >
      {filterItem}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  productsByColor: (color: string) => dispatch(productsByColor(color)),
  productsBySize: (size: string) => dispatch(productsBySize(size)),
});

export default connect(null, mapDispatchToProps)(FilterItem);
