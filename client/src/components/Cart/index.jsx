import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  const stringCart = JSON.stringify(cart);

  const cartItems = cart.map((item) => {
    return (
      <div key={item.productId}>
        <h2>{item.productName}</h2>
        <p>${item.productPrice}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  });

  return (
    <>
      <form action="http://localhost:3001/create-checkout-session" method="POST">
        {cartItems}
        <input type="hidden" name="cart" value={stringCart} />
        <button type="submit">Checkout</button>
      </form>
    </>
  );
};

export default Cart;
