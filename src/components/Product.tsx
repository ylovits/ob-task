import React from "react";
import { ProductInterface } from "../utils/fakeapi";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";

interface IProps {
  product: ProductInterface;
  addItem: typeof addItem;
}

const Product = ({ product, addItem }: IProps) => {
  const { title, price, availability, image_link, color, size } = product;
  return (
    <div className="product col-sm-12 col-md-6 p-0">
      <div className="product-inner p-3">
        <div className="position-relative">
          <img src={image_link} className="product-image mw-100" alt={title} />
          <div className="product-labels position-absolute d-flex flex-column">
            {availability !== "in stock" && (
              <div className="out-of-stock bg-danger text-white text-center p-3 mb-3">
                {availability}
              </div>
            )}
            <div
              onClick={() => addItem(product)}
              className="product-price bg-light text-center p-3 clickable"
            >
              {price}
            </div>
          </div>
        </div>
        <div className="product-details row p-0 m-0">
          <div className="product-details-inner d-flex w-100 justify-content-between align-items-center">
            <span
              className="product-title font-weight-bold m-2
          "
            >
              {title}
            </span>
            <span className="product-size m-2 px-4 bg-secondary text-white">
              {size}
            </span>
            <span className="product-color text-secondary m-2 text-center">
              {color}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: ProductInterface) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
