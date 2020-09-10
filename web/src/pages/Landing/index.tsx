import React from "react";

import "./style.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <div id="page-landing" className="container">
      <div className="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
          <h2>Your online study platform</h2>
        </div>

        <img src={landingImg} alt="landing main" className="hero-image" />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study" />
            Study
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="give classes" />
            Give Classes
          </a>
        </div>

        <span className="total-connections">
          Total connections - 200
          <img src={purpleHeartIcon} alt="purple heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
