import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../listContext";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(ListContext);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
          email: context.email,
          password: context.password,
        }),
      });
      const responseData = await response.json();
      var now = new Date();
      var deadline = new Date(now);
      deadline.setMinutes(now.getMinutes() + 30);
      context.cookie.set("token", responseData.token, {
        path: "/",
        expires: deadline,
      });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="input-form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={context.email}
        onChange={(e) => context.setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={context.password}
        onChange={(e) => context.setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
