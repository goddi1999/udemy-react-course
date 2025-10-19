import { createContext } from "react";
import { useState } from "react";
// object that create react component

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
  items: [],
  addItems: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const ctxValue = {
    items: shoppingCart,
    addItems: (item) => {
      setShoppingCart((prevItems) => [...prevItems, item]);
    },
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
