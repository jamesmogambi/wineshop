import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <Link className="header__brand" to="/">
      <div>Wine Shop</div>
    </Link>
    <div className="header__url">wineshop.com</div>
  </header>
);

export default Header;
