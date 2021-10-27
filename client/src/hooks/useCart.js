import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      try {
        const _cart = JSON.parse(localStorage.getItem("cart"));
        setCart(_cart || []);
      } catch (err) {
        console.error(err);
      }
      setInitialized(true);
    }
  }, [initialized]);

  const setCartLocalStorage = (cart) => {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return { cart, setCart: setCartLocalStorage };
};

export default useCart;
