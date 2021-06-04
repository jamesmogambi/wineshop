import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      <div className="App">
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

export default PublicRoute;
