import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            <nav>
              <NavLink to="/" exact activeClassName="active">
                Board Hoard
              </NavLink>
              <NavLink to="/shop" exact activeClassName="active">
                Shop
              </NavLink>
              <NavLink to="/cart" exact activeClassName="active">
                Cart
              </NavLink>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
