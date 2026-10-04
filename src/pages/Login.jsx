import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navabr";
import Googlelogin from "./GoogleLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          email: email,
          password: password,
        }
      );

      const token = response.data.token;
      const userName  =response.data.user.name;

      localStorage.setItem("token", token);
      localStorage.setItem("username",userName);

      console.log(token);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <main className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Login</h1>
          <p>Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">

          <div className="login-input-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <div className="login-register">
          <p>Don't have an account?</p>

          <Link to="/register">
            Register
          </Link>
          
        </div>
        <div className="login-register">


          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          
        </div>

        <div>
          <Googlelogin/>
        </div>


      </div>
    </main>
    </>
  );
}

export default Login;