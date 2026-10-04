import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";
function Navbar() {
    const [username, setUsername] = useState("");
    const { cart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem("username");
        const googleName = localStorage.getItem("googleName");

        if (name) {
            setUsername(name);
        } else if (googleName) {
            setUsername(googleName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("googleName");

        setUsername("");

        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                    <span className="navbar-logo-icon">🛍️</span>
                    <span className="navbar-logo-text">Velvet Sky</span>
                </Link>

                <div className="navbar-actions">

                    <Link to="/cart" className="cart-button">
                        <span className="cart-icon">🛒</span>
                        <span className="cart-text">Cart</span>
                        <span className="cart-count">
                            {cart.length}
                        </span>
                    </Link>

                    {username ? (
                        <>
                            <span className="navbar-user">
                                Hello, {username}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="navbar-logout"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-login">
                                Login
                            </Link>

                            <Link to="/register" className="navbar-register">
                                Register
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;