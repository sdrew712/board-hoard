import React from "react";
import { Link } from "react-router-dom";
import video from "../videos/longebaord.mp4";

const HomePage = () => {
  return (
    <Link to={`/shop`}>
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Up your longboarding game</h1>
    </Link>
  );
};

export default HomePage;
