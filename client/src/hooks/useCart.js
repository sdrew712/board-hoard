import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [initialized, setInitialized] = useState(false);

  //if cart is not initialized, fetch it from localStorage
  useEffect(() => {
    if (!initialized) {
      try {
        const _cart = JSON.parse(localStorage.getItem("cart"));
        setCart(_cart || []);
      } catch (err) {
        console.error(err);
      }
      //then initialize cart
      setInitialized(true);
    }
  }, [initialized]);

  //update cart in localStorage
  const setCartLocalStorage = (cart) => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return { cart, setCart: setCartLocalStorage };
};

export default useCart;
