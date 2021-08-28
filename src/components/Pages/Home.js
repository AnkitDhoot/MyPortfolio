import React, { useState, useEffect } from "react";
import "./Styles/Home.css";
import desktopImage from "../img/back.jpg";
import mobileImage from "../img/mobBack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import TypeWriterEffect from "react-typewriter-effect";
import "animate.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const myRef = document.querySelector(".scrollable-div");

  return (
    <div>
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="naming">
          <h1>
            <span role="img" aria-label="cheers">
              <p className="animate__animated animate__shakeX">👋</p>
            </span>
            I'm Ankit.
          </h1>
          <p>
            <b className=".scrollable-div">
              <TypeWriterEffect
                textStyle={{
                  fontSize: "1.5em",
                }}
                startDelay={100}
                cursorColor="#195190ff"
                text="I design and code websites, and I love what I do."
                typeSpeed={100}
                scrollArea={myRef}
              />
            </b>
          </p>
        </div>
        <div className="drop">
          <Link to="/About" className="link">
            <div className="drop-content ">
              Click here
              <p className="arrow">
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
