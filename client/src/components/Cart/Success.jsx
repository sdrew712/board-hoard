import React, { useEffect } from "react";
import useCart from "../../hooks/useCart";

const Success = () => {
  const { setCart } = useCart();

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div id="success-page">
      <h1 className="header">Thanks for your order!</h1>
      <p>
        We appreciate your business! If you have any questions, please email
        <a href="mailto:orders@example.com" className="email-link">
          {" "}
          orders@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default Success;
