import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import ProductsPage from "./Products";
import Cart from "./Cart";

const App = () => {
  return (
    <Router>
      <TopBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ProductsPage} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
