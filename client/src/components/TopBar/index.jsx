import React from "react";
import { NavLink } from "react-router-dom";

import Cart from "../Cart";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const TopBar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <nav>
              <NavLink to="/" exact activeClassName="active">
                Board Hoard
              </NavLink>
              <NavLink to="/shop" exact activeClassName="active">
                Shop
              </NavLink>
              <Cart open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
