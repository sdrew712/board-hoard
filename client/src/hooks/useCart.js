import { useCallback, useState, useEffect } from "react";

const loadCartFromStorage = () => {
  try {
    return JSON.parse(window.localStorage.getItem("cart")) || [];
  } catch (err) {
    console.error(err);
  }
};

const useCart = () => {
  const [cart, setCart] = useState(loadCartFromStorage);

  const handleStorageChange = useCallback((e) => {
    e.preventDefault();
    setCart(loadCartFromStorage());
  }, []);

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [handleStorageChange]);

  //update cart in localStorage
  const setCartLocalStorage = (cart) => {
    setCart(cart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("storage"));
  };

  return { cart, setCart: setCartLocalStorage };
};

export default useCart;
