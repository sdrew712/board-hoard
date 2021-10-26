// @ts-nocheck
import React, { useState, useEffect, useContext } from "react";
import { getSingleBoard } from "./boardsData";
import CartContext from "../../contexts/CartContext";

const ProductPage = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [boardData, setBoardData] = useState({});

  //get board id from URL
  const boardId = props.location.pathname.substring(6, 7);

  useEffect(() => {
    getSingleBoard(boardId).then((res) => {
      setBoardData(res);
    });
  }, [boardId]);

  const handleAddToCart = () => {
    const cartCopy = [...cart];

    const newItem = {
      productId: boardData.id,
      productName: boardData.name,
      productPrice: boardData.price,
      quantity: parseInt(document.getElementById("quantity").value),
    };

    const existingItem = cartCopy.find((cartItem) => cartItem.productId === newItem.productId);

    if (cartCopy.length === 0) {
      setCart([newItem]);
    } else if (existingItem) {
      existingItem.quantity += newItem.quantity;
      setCart(cartCopy);
    } else {
      setCart([...cartCopy, newItem]);
    }
  };

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

      <button onClick={() => handleAddToCart()}>Add to cart</button>
    </div>
  );
};

export default ProductPage;
