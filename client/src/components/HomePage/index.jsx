import React from "react";
import { Link } from "react-router-dom";
import video from "../videos/longebaord.mp4";
import "./index.scss";

import ShopNowButton from "./ShopNowButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HomePage = () => {
  let { width } = useWindowDimensions().windowDimensions;

  return (
    <>
      {width > 768 ? (
        <div className="home-container">
          <video className="video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="slogan-container">
            <h1 id="slogan">Up your longboarding game</h1>

            <Link to={`/shop`}>
              <ShopNowButton />
            </Link>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <div className="slogan-container">
            <h1 id="slogan">Up your longboarding game</h1>

            <Link to={`/shop`}>
              <ShopNowButton />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
