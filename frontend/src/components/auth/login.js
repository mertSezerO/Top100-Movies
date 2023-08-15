import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../../listContext";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(ListContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: context.email,
        password: context.password,
      });
      const token = response.data.token;
      const loggedInUser = response.data.user;
      localStorage.setItem("token", token);
      context.setUser(loggedInUser);
      context.setList(loggedInUser.movieList);
      console.log(response.data);
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
