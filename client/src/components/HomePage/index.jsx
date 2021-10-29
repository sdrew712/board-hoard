import React from "react";
import { Link } from "react-router-dom";
import video from "../videos/longebaord.mp4";
import "./index.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="slogan">
          <Link to={`/shop`}>
            <h1>Up your longboarding game</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
