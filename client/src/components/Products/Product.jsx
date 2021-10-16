import React from "react";

const Product = ({ imageURL, name, price, brand, category }) => {
  return (
    <div>
      <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />
      <p>{brand}</p>
      <p>{category}</p>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;
