import React from "react";
import "./Styles/About.css";
import myph from "../img/myph.jpeg";
import "animate.css";
import Footer from "../assets/Footer";

let About = () => {
  return (
    <>
      <div className="aboutsection">
        <div className="about">
          <div className="myphContainer  animate__animated animate__fadeInDown">
            <img className="myph" src={myph} alt="Logo" />
          </div>
          <div className="animate__animated animate__fadeInDown">
            <div>
              Hi, I am <span className="highlights">Ankit Dhoot</span> pursuing
              B.Tech in Computer Engineering from Poornima University.
              Currently, I am in Jaipur, Rajasthan. I'm an excited developer. I
              have dealt with JavaScript, HTML and CSS. I have likewise dealt
              with some JavaScript frameworks like ReactJS, and some css
              structures like Bootstrap.
            </div>

            <div>
              In addition, I also work on some tools and technologies like JSON,
              SASS. Besides, I have procured 5 stars Golden Badge in 10 days of
              JavaScript on Hackerrank stage with JavaScript nuts and bolts
              endorsement and Microsoft Certified Azure Data Fundamentals
              (DP-900). Aside from this, I am enthusiastic about exploring
              places and cuisines. I also like watching various genres in films
              and web series. Moreover, I am a hotshot Counter Strike fan and a
              decent player.
            </div>
            <div>
              If you fancy a chat feel free to drop me a mail. Have a great day!
            </div>
            <div className="mail highlights ">ankitdhoot.70@gmail.com</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
