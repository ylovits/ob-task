import React, { Fragment } from "react";
import logo from "../../assets/logo.svg";

const Loading = () => {
  return (
    <Fragment>
      <div className="loading position-fixed d-flex w-100 h-100 p-4 bg-white align-items-center text-center justify-content-center">
        <div className="w-50 loading-inner">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
