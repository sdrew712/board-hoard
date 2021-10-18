import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getBoardsData, handleFilter } from "../../boardsData";
import Filter from "./Filter";

const ProductsPage = () => {
  const [boardsData, setBoardsData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    if (isFiltered !== true) {
      getBoardsData().then((res) => {
        setBoardsData(Object.entries(res));
      });
    } else {
      handleFilter(filterTerm).then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [isFiltered, filterTerm]);

  const boardRenderer = boardsData.map((data) => {
    return (
      <Product
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

  return (
    <div>
      <Filter
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
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

export default ProductsPage;
