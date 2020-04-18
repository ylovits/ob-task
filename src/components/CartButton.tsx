import React from "react";
import cart from "../assets/cart.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { selectCartItemsCount } from "../redux/cart/cartSelectors";
import { RootState } from "../redux/root-reducer";

interface IProps {
  toggleCartHidden: typeof toggleCartHidden;
  itemCount: number;
}

const CartButton = ({ toggleCartHidden, itemCount }: IProps) => {
  return (
    <div
      onClick={toggleCartHidden}
      className="cart-button d-flex position-absolute align-items-center justify-content-center clickable bg-light"
    >
      <img src={cart} alt="logo" />
      <span className="cart-count rounded-circle position-absolute bg-dark text-white text-center">
        {itemCount}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

interface DesiredSelection {
  itemCount: number;
}

const mapStateToProps = () =>
  createStructuredSelector<RootState, DesiredSelection>({
    itemCount: selectCartItemsCount,
  });

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
