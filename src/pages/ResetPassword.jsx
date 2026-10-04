
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import "./ResetPassword.css";

function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await api.patch(
                `/reset-password/${token}`,
                { newPassword }
            );

            setMessage(response.data.message);

            setNewPassword("");
            setConfirmPassword("");

            // Go to login after successful password reset
            setTimeout(() => {
                navigate("/login");
            }, 1500);

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
        <div className="reset-container">

            <div className="reset-card">

                <h2>Reset Password</h2>

                <p className="reset-description">
                    Enter your new password below.
                </p>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="newPassword">
                        New Password
                    </label>

                    <input
                        id="newPassword"
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) =>
                            setNewPassword(e.target.value)
                        }
                        required
                    />

                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Resetting..."
                            : "Reset Password"}
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
    );
}

export default ResetPassword;
