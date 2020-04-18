import React, { Fragment } from "react";
import Filters from "./Filters";

import { connect } from "react-redux";
import { selectProductsItems } from "../../redux/products/productsSelectors";
import { createStructuredSelector } from "reselect";

import { ProductInterface } from "../../utils/fakeapi";
import { RootState } from "../../redux/root-reducer";
import Products from "../Products";

interface IProps {
  products: ProductInterface[];
}

const MainContent = ({ products }: IProps) => {
  return (
    <Fragment>
      <Filters />
      <Products productsObj={products} />
    </Fragment>
  );
};

export interface DesiredSelection {
  products: ProductInterface[];
}

const mapStateToProps = () =>
  createStructuredSelector<RootState, DesiredSelection>({
    products: selectProductsItems,
  });

export default connect(mapStateToProps)(MainContent);
