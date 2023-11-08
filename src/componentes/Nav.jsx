import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.css";
import "../mediaQuery/Nav-media.css";
import logo from "../assets/logo-alerta-enchente.png";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sobre"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sobre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contato"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contato
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                  to="/Login"
                  className={location.pathname === "/Login" ? "black-link" : ""}
                >
                  Login
                </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
