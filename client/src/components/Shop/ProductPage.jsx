// @ts-nocheck
import React, { useState, useEffect } from "react";
import { getSingleBoard } from "./boardsData";

const ProductPage = (props) => {
  const [boardData, setBoardData] = useState({});

  //get board id from URL
  const boardId = props.location.pathname.substring(6, 7);

  useEffect(() => {
    getSingleBoard(boardId).then((res) => {
      setBoardData(res);
    });
  }, [boardId]);

  return (
    <div>
      <img src={boardData.image_url} alt={`${boardData.name} deck`} style={{ width: "250px" }} />

      <div>
        <h3>{boardData.name}</h3>
        <p>${boardData.price}</p>
        <p>{boardData.description}</p>
      </div>

      <div>
        <p>{boardData.brand}</p>
        <p>{boardData.category}</p>
        <p>Length {boardData.length}"</p>
        <p>Width {boardData.width}"</p>
        <p>Wheelbase: {boardData.wheelbase}"</p>
        <p>Flex: {boardData.flex}</p>
      </div>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" name="quantity" id="quantity" defaultValue="1" />

      <button
        onClick={() => {
          const cart = JSON.parse(localStorage.getItem("cart"));
          const newItem = {
            productId: boardData.id,
            productName: boardData.name,
            productPrice: boardData.price,
            quantity: document.getElementById("quantity").value,
          };

          cart.push(newItem);

          localStorage.setItem("cart", JSON.stringify(cart));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductPage;
