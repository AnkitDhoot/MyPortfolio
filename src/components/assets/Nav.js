import React from "react";
import { Link } from "react-router-dom";
import "./style/Nav.css";

function Nav() {
  const hide = () => {
    document.querySelector(".toggler").checked = false;
  };
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={hide}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" onClick={hide}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Projects" onClick={hide}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/Resume" onClick={hide}>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" onClick={hide}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
