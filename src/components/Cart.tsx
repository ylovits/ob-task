import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

import { RootState } from "../redux/root-reducer";
import { ProductInterface } from "../utils/fakeapi";

interface IProps {
  cartItems: ProductInterface[];
}

const Cart = ({ cartItems }: IProps) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    if (cartItems !== []) {
      for (let i = 0; i < cartItems.length; i++) {
        let unitprice = cartItems[i].price.replace(" EUR", "");
        total += parseFloat(unitprice);
      }
    }
    setTotal(total);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cart d-flex flex-column w-100 h-100 p-4 bg-white position-relative">
      {cartItems.map((cartitem) => {
        return <CartItem key={cartitem.id} cartitem={cartitem} />;
      })}
      <div className="degrade position-absolute w-100"></div>
      <h4 className="cart-total text-right p-3">Total: {total} EUR</h4>
    </div>
  );
};

interface DesiredSelection {
  cartItems: ProductInterface[];
}

const mapStateToProps = () =>
  createStructuredSelector<RootState, DesiredSelection>({
    cartItems: selectCartItems,
  });

export default connect(mapStateToProps)(Cart);
