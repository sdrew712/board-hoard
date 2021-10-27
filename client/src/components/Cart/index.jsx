import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const stringCart = JSON.stringify(cart);

  const handleQuantityChange = (quantity, productId) => {
    const cartCopy = [...cart];

    const existingItem = cartCopy.find((cartItem) => cartItem.productId === productId);
    const productIndex = cartCopy.indexOf(existingItem);

    //if the selected quantity is greater than 0, update it
    if (quantity > 0) {
      existingItem.quantity = quantity;
      setCart(cartCopy);
    }
    //else, remove it from the state(causing rerender and its removal from cart)
    else {
      cartCopy.splice(productIndex, 1);
      setCart(cartCopy);
    }
  };

  //map over the state of items in cart, returning html to display each
  const cartItems = cart.map((item) => {
    return (
      <div key={item.productId}>
        <h2>{item.productName}</h2>
        <p>${item.productPrice * item.quantity}</p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue={item.quantity}
          onChange={({ target }) => handleQuantityChange(target.value, item.productId)}
        />
      </div>
    );
  });

  return (
    <>
      {/* post to endpoint that redirects to the url generated by stripe for checkout */}
      <form action="http://localhost:3001/create-checkout-session" method="POST">
        {cartItems}
        <input type="hidden" name="cart" value={stringCart} />
        <button type="submit">Checkout</button>
      </form>
    </>
  );
};

export default Cart;
