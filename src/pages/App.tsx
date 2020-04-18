import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/layout/Header";
import MainContent from "../components/layout/MainContent";
import Loading from "../components/UI/Loading";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { selectHidden } from "../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { RootState } from "../redux/root-reducer";

interface IProps {
  hidden: boolean;
}

const App = ({ hidden }: IProps) => {
  // Fake! Loading not implemented
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {loading && <Loading />}
      <Header />
      {!hidden && <Cart />}
      {hidden && <MainContent />}
    </Fragment>
  );
};

interface DesiredSelection {
  hidden: boolean;
}

const mapStateToProps = () =>
  createStructuredSelector<RootState, DesiredSelection>({
    hidden: selectHidden,
  });

export default connect(mapStateToProps)(App);
