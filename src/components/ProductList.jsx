import { useEffect, useState } from "react";
import api from "../api";
import { useCart } from "../context/CartContext";

function ProductList(props) {
  const cart = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/product/" + props.type);
        setProducts(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Could not load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [props.type]);

  if (loading) return <p className="veg-status">Loading...</p>;
  if (error) return <p className="veg-status error">{error}</p>;
  if (products.length === 0) return <p className="veg-status">No items available right now.</p>;

  return (
    <div className="veg-grid">
      {products.map((p) => (
        <article className="veg-card" key={p.type + "-" + p.id}>
          <div className="veg-img-wrap">
           <img
                                    className="veg-img"
                                    src={p.image}
                                    alt={p.name}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://placehold.co/400x300/e6f0e3/2f6b3a.png?text=No+image";
                                    }}
                                />
          </div>
          <div className="veg-body">
            <h2 className="veg-name">{p.name}</h2>
            <div className="veg-meta">
              <span className="veg-price">₹{p.price}</span>
              <span className="veg-weight">{p.weight}</span>
              <button className="add-button" onClick={() => cart.addToCart(p)}>
                Add
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;