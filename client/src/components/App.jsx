import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "../index.css";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import ShopPage from "./Shop";
import Cart from "./Cart";
import ProductPage from "./Shop/ProductPage";

const App = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path={`/productpage`} component={ProductPage} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
