/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(item) {
    if (cartItems.indexOf(item) === -1) {
      const newCartItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  }

  function removeItemFromCart(item) {
    if (cartItems.indexOf(item) === -1) return;

    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  }

  function incrementCartItemQuantity(item) {
    if (cartItems.indexOf(item) === -1) return;

    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem === item
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  }

  function decrementCartItemQuantity(item) {
    if (cartItems.indexOf(item) === -1) return;

    if (item.quantity === 1) {
      removeItemFromCart(item);
      return;
    }
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem === item
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
