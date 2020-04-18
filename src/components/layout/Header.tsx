import React from "react";
import Logo from "../UI/Logo";
import CartButton from "../CartButton";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner position-relative d-flex justify-content-center align-items-center h-100 w-100">
        <Logo />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;
