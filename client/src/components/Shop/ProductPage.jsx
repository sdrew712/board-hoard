import React from "react";

const ProductPage = ({ location }) => {
  const { description = "defaultValue" } = location.state || {};

  return <div>{description}</div>;
};

export default ProductPage;
