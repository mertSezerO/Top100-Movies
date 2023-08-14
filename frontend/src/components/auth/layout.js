import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div id="auth-layout">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
