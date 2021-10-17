import React from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const TopBar = () => {
  return (
    <Headroom>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Board Hoard
        </NavLink>
        <NavLink to="/shop" exact activeClassName="active">
          Shop
        </NavLink>
        <Search />
        <NavLink to="/cart" exact activeClassName="active">
          Cart
        </NavLink>
      </nav>
    </Headroom>
  );
};

export default TopBar;
