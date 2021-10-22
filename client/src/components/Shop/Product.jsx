import React from "react";
import { Link } from "react-router-dom";

const Product = ({ imageURL, name, price, brand, category, flex, description, length, width, wheelbase }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/shop/${name}`,
          state: {
            imageURL,
            name,
            price,
            brand,
            category,
            flex,
            description,
            length,
            width,
            wheelbase,
          },
        }}
      >
        <div>
          <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />
          <p>{brand}</p>
          <h3>{name}</h3>
          <p>${price}</p>
          <p>{category}</p>
          <p>{length}"</p>
          <p>{flex}</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
