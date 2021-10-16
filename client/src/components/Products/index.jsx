import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getBoardsData } from "../../boardsData";

const ProductsPage = () => {
  const [boardsData, setBoardsData] = useState({});

  useEffect(() => {
    getBoardsData().then((res) => {
      setBoardsData(res);
    });
  }, []);

  console.log(boardsData);

  return (
    <div>
      Products Page bro!
      <Product />
    </div>
  );
};

export default ProductsPage;
