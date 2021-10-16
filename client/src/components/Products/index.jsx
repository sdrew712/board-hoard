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

  const boardRenderer = boardsData.map((data) => {
    console.log(data[1]);
    return (
      <Product
        key={data[1].id}
        name={data[1].name}
        price={data[1].price}
        brand={data[1].brand}
        category={data[1].category}
        imageURL={data[1].image_url}
        description={data[1].description}
        length={data[1].length}
        width={data[1].width}
        wheelbase={data[1].wheelbase}
        flex={data[1].flex}
      />
    );
  });

  return (
    <div>
      Products Page bro!
      <div>{boardRenderer}</div>
    </div>
  );
};

export default ProductsPage;
