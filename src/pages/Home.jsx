import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navabr";

const categories = [
  {
    to: "/grocery",
    icon: "🛒",
    name: "Grocery",
    desc: "Rice, flour, pulses, oil and spices",
  },
  {
    to: "/Vegetable",
    icon: "🥦",
    name: "Vegetables",
    desc: "Fresh vegetables by the kilo",
  },
  {
    to: "/cold",
    icon: "🥤",
    name: "Cold Drinks",
    desc: "Sodas, juices and chilled drinks",
  },
  {
    to: "/Animal",
    icon: "🐾",
    name: "Animal Food",
    desc: "Feed for pets and farm animals",
  },
  {
    to: "/Stationary",
    icon: "✏️",
    name: "Stationery",
    desc: "Notebooks, pens and school supplies",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="home-hero-content">
            <span className="hero-label">
              EVERYTHING YOU NEED
            </span>

            <h1>
              Welcome to <span>Our Shop</span>
            </h1>

            <p>
              What do you want to buy today?
              Choose a category and start shopping.
            </p>

            <a href="#categories" className="shop-now-btn">
              Shop Now →
            </a>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section" id="categories">
          <div className="section-heading">
            <span>EXPLORE</span>

            <h2>Shop by Category</h2>

            <p>
              Choose what you need and start shopping.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                to={category.to}
                className="category-card"
                key={category.to}
              >
                <div className="category-icon">
                  {category.icon}
                </div>

                <div className="category-content">
                  <h3>{category.name}</h3>

                  <p>{category.desc}</p>
                </div>

                <div className="category-arrow">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="home-footer">
          <p>© 2026 Our Shop. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default Home;