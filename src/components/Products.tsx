import React from "react";
import Product from "./Product";

import { ProductInterface } from "../utils/fakeapi";

interface IProps {
  productsObj: ProductInterface[];
}
const Products = ({ productsObj }: IProps) => {
  return (
    <div className="container">
      <div className="products w-100 row p-0 m-0 ">
        {productsObj.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
