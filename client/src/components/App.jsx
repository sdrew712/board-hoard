import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopBar from "./TopBar/TopBar";
import HomePage from "./HomePage/HomePage";
import ProductsPage from "./Products/ProductsPage";
import Cart from "./Cart/Cart";

const App = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ProductsPage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
