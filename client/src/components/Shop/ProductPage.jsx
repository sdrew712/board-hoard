import React from "react";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { description } = location.state;

  return <div>{description}</div>;
};

export default ProductPage;
