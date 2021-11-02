import React, { useState, useEffect } from "react";
import { getSingleBoard } from "./boardsData";
import useCart from "../../hooks/useCart";

import Loading from "./Loading";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

  // console.log(cart);

  //add board to cart
  const handleAddToCart = () => {
    const cartCopy = [...cart];
    // console.log(boardData);

    //create new item object
    const newItem = {
      id: boardData.id,
      name: boardData.name,
      price: boardData.price,
      brand: boardData.brand,
      imageURL: boardData.image_url,
      length: boardData.length,
      flex: boardData.flex,
      quantity: quantity,
    };

    //check if item already exists in cart
    const existingItem = cartCopy.find((cartItem) => cartItem.id === newItem.id);

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
    }
  };

  //if no board data, show loading
  if (boardData.length === undefined) {
    return <Loading />;
  }

  return (
    <div id="product-page">
      <img src={boardData.image_url} alt={`${boardData.name} deck`} style={{ width: "250px" }} />

      <div>
        <h2>{boardData.name}</h2>
        <h3>${boardData.price}</h3>
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

      <div className="product-utils-container">
        <div className="product-quantity">
          <TextField
            label="Quantity"
            type="number"
            min="1"
            defaultValue="1"
            onChange={({ target }) => setQuantity(target.value)}
          />
        </div>

        <Button variant={"contained"} color="secondary" sx={{ margin: "5px" }} onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
