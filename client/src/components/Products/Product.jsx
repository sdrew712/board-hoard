import React, { useState } from "react";
import { getBoardsData } from "../../boardsData";

getBoardsData().then((res) => {
  const fuckYou = res.data;
  console.log(fuckYou);
});

const Product = () => {
  const [boardsData, setBoardsData] = useState({});

  return <div>this is a product!</div>;
};

export default Product;
