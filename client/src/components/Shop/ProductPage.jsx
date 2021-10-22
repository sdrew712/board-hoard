import React from "react";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  // @ts-ignore
  const { imageURL, name, price, brand, category, flex, description, length, width, wheelbase } = location.state;

  return (
    <div>
      <img src={imageURL} alt={`${name} deck`} style={{ width: "250px" }} />

      <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </div>

      <div>
        <p>{brand}</p>
        <p>{category}</p>
        <p>Length {length}"</p>
        <p>Width {width}"</p>
        <p>Wheelbase: {wheelbase}"</p>
        <p>Flex: {flex}</p>
      </div>
    </div>
  );
};

export default ProductPage;
