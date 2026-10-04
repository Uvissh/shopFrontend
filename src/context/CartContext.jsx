import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

// same item only if BOTH id and type match
const same = (c, id, type) => c.id === id && c.type === type;

export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some((c) => same(c, product.id, product.type));
      if (exists) {
        return prev.map((c) =>
          same(c, product.id, product.type)
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id, type) => {
    setCart((prev) =>
      prev.map((c) => (same(c, id, type) ? { ...c, quantity: c.quantity + 1 } : c))
    );
  };

  const decreaseQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((c) => (same(c, id, type) ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);