import React, { useState, useEffect } from "react";
import { getSingleBoard } from "./boardsData";
import useCart from "../../hooks/useCart";

import Loading from "./Loading";

const ProductPage = (props) => {
  const { cart, setCart } = useCart();
  const [boardData, setBoardData] = useState({});
  const [quantity, setQuantity] = useState(1);

  //get board id from URL
  const boardId = props.location.pathname.substring(6, 7);

  //get board data for this page
  useEffect(() => {
    getSingleBoard(boardId).then((res) => {
      setBoardData(res);
    });
  }, [boardId]);

  //add board to cart
  const handleAddToCart = () => {
    const cartCopy = [...cart];

    //create new item object
    const newItem = {
      productId: boardData.id,
      productName: boardData.name,
      productPrice: boardData.price,
      quantity: quantity,
    };

    //check if item already exists in cart
    const existingItem = cartCopy.find((cartItem) => cartItem.productId === newItem.productId);

    //if nothing is in cart, set it to new item
    if (cartCopy.length === 0) {
      setCart([newItem]);
    }
    //if item exists, update quantity in copy
    if (existingItem) {
      existingItem.quantity += newItem.quantity;
      //set cart to updated copy
      setCart(cartCopy);
    } else {
      //set cart to updated copy with new item
      setCart([...cartCopy, newItem]);
      console.log(cart);
    }
  };

  //if no board data, show loading
  if (boardData.length === undefined) {
    return <Loading />;
  }

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
      <input
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        defaultValue="1"
        onChange={({ target }) => setQuantity(target.value)}
      />

      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductPage;
