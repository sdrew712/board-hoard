import React from "react";
import { Link } from "react-router-dom";

const Product = ({ imageURL, name, price, brand, category, flex }) => {
  return (
    <>
      <Link to={`/shop/${name}`}>
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
