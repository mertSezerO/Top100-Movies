import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords are not identical");
      }
      axios
        .post("http://localhost:3000/users", {
          email: email,
          password: password,
          username: username,
        })
        .then((result) => {
          navigate("/auth");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="input-form">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        name="password"
        placeholder="Re-type your Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register Now</button>
    </div>
  );
}
