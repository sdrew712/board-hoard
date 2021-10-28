import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "../index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import ShopPage from "./Shop";
import Cart from "./Cart";
import ProductPage from "./Shop/ProductPage";
import Success from "./Cart/Success";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

//create mui theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#f67671",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:id" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/success" component={Success} />
          <Route path="/*">
            <Redirect to="/" />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
