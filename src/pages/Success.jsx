import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Success() {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart(); // empty the cart after payment
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>Payment successful. Thank you!</h2>
      <Link to="/">Continue shopping</Link>
    </div>
  );
}

export default Success;