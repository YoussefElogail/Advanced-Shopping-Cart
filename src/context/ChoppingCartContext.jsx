import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const shoppingCartContext = createContext({});



const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem("cart-items")? JSON.parse(localStorage.getItem("cart-items")):[]);
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((carrItems) => {
      if (carrItems.find((item) => item.id === id) == null) {
        return [...carrItems, { id, quantity: 1 }];
      } else {
        return carrItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((carrItems) => {
      if (carrItems.find((item) => item.id === id)?.quantity === 1) {
        return carrItems.filter((item) => item.id !== id);
      } else {
        return carrItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <shoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCartContext = () => {
  return useContext(shoppingCartContext);
};
