import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import ProductPage from "./ProductPage";

const Product = ({ imageURL, name, price, brand, category, flex }) => {
  let history = useHistory();
  function handleClick() {
    history.push(`/productpage`);
  }
  return (
    <>
      <div onClick={handleClick}>
        <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />
        <p>{brand}</p>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{flex}</p>
      </div>
    </>
  );
};

export default Product;
