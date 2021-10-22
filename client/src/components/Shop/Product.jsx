import React from "react";
import { Link } from "react-router-dom";

const Product = ({ imageURL, name, price, brand, category, flex, description }) => {
  return (
    <>
      <Link to={{ pathname: `/shop/${name}`, state: { description } }}>
        <div>
          <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />
          <p>{brand}</p>
          <p>{category}</p>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{flex}</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
