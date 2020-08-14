import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  icon = "fas fa-wrench",
  title = "Mama's Garage",
}) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i class={icon} style={{ margin: "auto 1rem" }}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Enter</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
