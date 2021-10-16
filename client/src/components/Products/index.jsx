import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getBoardsData } from "../../boardsData";

const ProductsPage = () => {
  const [boardsData, setBoardsData] = useState([]);

  useEffect(() => {
    getBoardsData().then((res) => {
      setBoardsData(Object.entries(res));
    });
  }, []);

  boardsData.map(() => {});
  console.log(boardsData);

  return <div>Products Page bro!</div>;
};

export default ProductsPage;
