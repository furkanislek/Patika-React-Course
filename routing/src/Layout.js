import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>
        <Outlet />
        <nav>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "black" : "gray" })}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({ color: isActive ? "black" : "gray" })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => ({ color: isActive ? "black" : "gray" })}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </h1>
    </div>
  );
}

export default Layout;
