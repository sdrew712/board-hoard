import React from "react";

const Cart = () => {
  const stringCart = localStorage.getItem("cart");
  const cart = JSON.parse(stringCart);

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
