import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";

const Product = ({ imageURL, name, price, brand, category }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`/shop/productpage`} component={ProductPage} />
        </Switch>
        <Link to={`/shop/productpage`}>
          <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />
          <p>{brand}</p>
          <p>{category}</p>
          <h3>{name}</h3>
          <p>{price}</p>
        </Link>
      </Router>
    </>
  );
};

export default Product;
