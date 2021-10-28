import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getBoardsData } from "./boardsData";
import Filters from "./Filters";

const ShopPage = () => {
  const [boardsData, setBoardsData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  //if board data is not filtered, get all board data
  useEffect(() => {
    if (!isFiltered) {
      getBoardsData().then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [isFiltered]);

  const boardRenderer = boardsData.map((data) => {
    return (
      <ProductCard
        key={data[1].id}
        id={data[1].id}
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

  //if there is no filter and there is board data, render all board data
  const boardsRenderer = () => {
    if (isFiltered === false || boardsData.length > 0) {
      return boardRenderer;
    }
    //if there is no board data, render no board data message
    else {
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
