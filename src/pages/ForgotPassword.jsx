import { useState } from "react";
import api from "../api";
import "./ForgotPassword.css";
import Navbar from "../components/Navabr";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);

        try {
            const response = await api.post("/forgot-password", {
                email
            });

            setMessage(response.data.message);

        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="forgot-container">

            <div className="forgot-card">

                <h2>Forgot Password?</h2>

                <p className="forgot-description">
                    Enter your email address and we'll send you
                    a link to reset your password.
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Sending..."
                            : "Send Reset Link"
                        }
                    </button>

                </form>

                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

            </div>

        </div>
        </>
    );
}

export default ForgotPassword;