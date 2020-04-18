import React from "react";
import { ProductInterface } from "../utils/fakeapi";

interface IProps {
  cartitem: ProductInterface;
}

const CartItem = ({ cartitem }: IProps) => {
  const { title, price, image_link, color, size } = cartitem;
  return (
    <div className="border-bottom row w-100 px-0 py-4 m-0 align-items-end">
      <div className="col-md-4 col-12">
        <img src={image_link} className="product-image mw-100" alt={title} />
      </div>
      <div className="col-md-4 col-6">
        <h3>{title}</h3>
        <div>
          <div className="d-inline-block px-3 py-1 bg-dark text-white text-center">
            {size}
          </div>
          <div className="d-inline-block px-2">{color}</div>
        </div>
      </div>
      <h5 className="col-md-4 col-6">Price: {price}</h5>
    </div>
  );
};

export default CartItem;
