import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div id="auth-layout">
      <nav>
        <ul>
          <li>
            <Link
              to={"/auth"}
              className="link"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </li>
          |
          <li>
            <Link
              to={"register"}
              className="link"
              style={{ textDecoration: "none" }}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
