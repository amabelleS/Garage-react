import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  icon = "fas fa-wrench",
  title = "Mama's Garage",
  home = "fas fa-igloo",
}) {
  const showPhoneNum = () => {
    alert("666");
  };
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} style={{ margin: "auto 1rem" }}></i>
        {title}
      </h1>
      <ul>
        <li>
          <i onClick={showPhoneNum} className="fas fa-phone"></i>
        </li>
        <li>
          <Link to="/">
            <i className={home} style={{ margin: "auto 1rem" }}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  home: PropTypes.string,
};
