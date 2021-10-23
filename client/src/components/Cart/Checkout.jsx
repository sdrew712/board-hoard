import React from "react";

const Checkout = () => {
  return (
    <form action="http://localhost:3001/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  );
};

export default Checkout;
