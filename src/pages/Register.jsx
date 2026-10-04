import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "../components/Navabr";
import Googlelogin from "./GoogleLogin";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      console.log(response.data);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <main className="register-page">
      <div className="register-card">

        <div className="register-header">
          <h1>Register</h1>
          <p>Create your account</p>
        </div>

        <form
          onSubmit={handleRegister}
          className="register-form"
        >

          <div className="register-input-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
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

          <div className="register-input-group">
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
            className="register-button"
          >
            Register
          </button>

        </form>

        <div className="register-login">
          <p>Already have an account?</p>

          <Link to="/login">
            Login
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

export default Register;