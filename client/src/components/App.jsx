import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "../index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import ShopPage from "./Shop";
import ProductPage from "./Shop/ProductPage";
import Success from "./Cart/Success";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Footer from "./Footer";

import useWindowDimensions from "../hooks/useWindowDimensions";

//create mui theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#f67671",
      contrastText: "#FFFFFF",
    },
  },
});

const App = () => {
  const { width } = useWindowDimensions().windowDimensions;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />

        <div style={width > 768 ? { paddingTop: "94px" } : { paddingTop: "76px" }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/:id" component={ProductPage} />
            <Route exact path="/success" component={Success} />
            <Route path="/*">
              <Redirect to="/" />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
