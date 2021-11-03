import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

import Cart from "../Cart";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import LocalMallIcon from "@mui/icons-material/LocalMall";

let drawerWidth = 300;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function TopBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //handle cart size
  const { width } = useWindowDimensions().windowDimensions;

  useEffect(() => {
    if (width < 768) {
      drawerWidth = width;
    }
    if (width >= 768) {
      drawerWidth = 300;
    }
  }, [width]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <NavLink to="/" exact activeClassName="active">
              <img src="/images/BoardHoardHoriz.png" alt="Board Hoard Home" className="bh-logo" />
            </NavLink>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{ flexGrow: 1.5, fontFamily: "Bebas Neue, cursive", letterSpacing: "8px" }}
            component="div"
            color="secondary"
          >
            <NavLink to="/shop" exact activeClassName="active" className="nav-item">
              SHOP
            </NavLink>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <LocalMallIcon color="secondary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} color="secondary">
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <Cart />
        </List>
      </Drawer>
    </Box>
  );
}
