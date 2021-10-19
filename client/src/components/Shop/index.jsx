import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getBoardsData, filterBoardsData } from "./boardsData";
import Search from "./Search";
import Filter from "./Filter";

const ShopPage = () => {
  const [boardsData, setBoardsData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTerms, setFilterTerms] = useState([]);

  useEffect(() => {
    if (isFiltered) {
      console.log("it is filtered");
      filterBoardsData(filterTerms).then((res) => {
        console.log(res);
        setBoardsData(Object.entries(res));
      });
    } else {
      console.log("it is not filtered");
      getBoardsData().then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [isFiltered, filterTerms]);

  const boardRenderer = boardsData.map((data) => {
    return (
      <Product
        key={data[1].id}
        // id={data[1].id}
        name={data[1].name}
        price={data[1].price}
        brand={data[1].brand}
        category={data[1].category}
        imageURL={data[1].image_url}
        // description={data[1].description}
        // length={data[1].length}
        // width={data[1].width}
        // wheelbase={data[1].wheelbase}
        // flex={data[1].flex}
      />
    );
  });

  return (
    <div>
      <Search />
      <Filter
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        filterTerms={filterTerms}
        setFilterTerms={setFilterTerms}
      />
      <div
        style={{
          float: "right",
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {boardRenderer}
      </div>
    </div>
  );
};

export default ShopPage;
