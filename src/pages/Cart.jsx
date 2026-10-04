import { useState } from "react";                       // CHANGE 1: import useState
import { useNavigate } from "react-router-dom";
import api from "../api";                               // CHANGE 2: import api
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart = [], increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();
  const [paying, setPaying] = useState(false);          // CHANGE 3: paying state

  const total = cart.reduce((sum, c) => sum + c.price * (c.quantity ?? 1), 0);
    const token = localStorage.getItem("token");
    const isLoggedIn  = token !== null

  // CHANGE 4: the payment function
  const handlePayment = async () => {
    if(!isLoggedIn){
      navigate("/login")
      return;
    }
    setPaying(true);
    try {
    
      const response = await api.post(
      "/create-checkout-session",
      {
        items: cart.map((c) => ({
          id: c.id,
          type: c.type,
          quantity: c.quantity ?? 1,
        })),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

      window.location.href = response.data.url; // opens Stripe's payment page
    } catch (err) {
      console.error(err);
  if (err.response && err.response.status === 401) {
    navigate("/login");
  } else if (err.response && err.response.data.error) {
    alert(err.response.data.error);
  } else {
    alert("Payment could not start. Please try again.");
  }
  setPaying(false);

    }
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button className="cart-back" aria-label="Back" onClick={() => navigate(-1)}>
          &#8592;
        </button>
        <h1>My Cart</h1>
      </header>

      {cart.length === 0 ? (
        <div className="card cart-empty">Your cart is empty</div>
      ) : (
        <>
          <section className="card">
            {cart.map((c) => (
              // CHANGE 5a: key uses type and id, because ids repeat across tables
              <div className="cart-item" key={c.type + "-" + c.id}>
                <img src={c.image} alt={c.name} />
                <div className="cart-item-info">
                  <p className="cart-item-name">{c.name}</p>
                  <p className="cart-item-price">₹{c.price}</p>
                </div>
                <div className="qty">
                  {/* CHANGE 5b: pass type too, so only the right item changes */}
                  <button onClick={() => decreaseQty(c.id, c.type)} aria-label="Decrease">−</button>
                  <span>{c.quantity ?? 1}</span>
                  <button onClick={() => increaseQty(c.id, c.type)} aria-label="Increase">+</button>
                </div>
              </div>
            ))}
          </section>

          <div className="checkout-bar">
            {/* CHANGE 5c: button calls handlePayment instead of navigate("/payment") */}
            <button className="checkout-btn" onClick={handlePayment} disabled={paying}>
              <span className="checkout-total">
                <strong>₹{total}</strong>
                <small>TOTAL</small>
              </span>
              <span className="checkout-label">
                {paying ? "Please wait..." : "Proceed to Payment ›"}
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;