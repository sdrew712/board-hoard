import React from "react";

const Checkout = () => {
  return (
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  );
};

export default Checkout;
