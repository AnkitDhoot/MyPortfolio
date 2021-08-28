import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaInstagram,
} from "react-icons/fa";
import "./style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="iconcontainer">
        <div>
          <a href="https://github.com/AnkitDhoot">
            <div className="icons">
              <FaGithub />
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ankit-dhoot-bb721a16b/">
            <div className="icons">
              <FaLinkedin />
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.hackerrank.com/ankitdhoot_70">
            <div className="icons">
              <FaHackerrank />
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/_ankitdhoot/">
            <div className="icons">
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
