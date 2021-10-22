import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getBoardsData } from "./boardsData";
import Filters from "./Filters";

const ShopPage = () => {
  const [boardsData, setBoardsData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (isFiltered === false) {
      getBoardsData().then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [isFiltered]);

  const boardRenderer = boardsData.map((data) => {
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

  const boardsRenderer = () => {
    if (isFiltered === false || boardsData.length > 0) {
      return boardRenderer;
    } else {
      return <p>No boards found</p>;
    }
  };

  return (
    <div>
      <Filters
        getBoardsData={getBoardsData}
        setBoardsData={setBoardsData}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
      />
      <div
        style={{
          float: "right",
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {boardsRenderer()}
      </div>
    </div>
  );
};

export default ShopPage;
