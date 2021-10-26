import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "../index.css";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import ShopPage from "./Shop";
import Cart from "./Cart";
import ProductPage from "./Shop/ProductPage";
import Success from "./Cart/Success";
import CartContext from "../contexts/CartContext";

const App = () => {
  const [cart, setCart] = useState([]);
  const value = { cart, setCart };

  return (
    <CartContext.Provider value={value}>
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
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
