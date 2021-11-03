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
          <video className="home-media" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>

          <div className="slogan-container">
            <h1 className="header">Up your longboarding game</h1>

            <Link to={`/shop`}>
              <ShopNowButton />
            </Link>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <img
            className="home-media"
            src="https://images.unsplash.com/photo-1569082573633-6c411d829597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="girl riding longboard"
          />
          <div className="slogan-container">
            <h1 className="header">Up your longboarding game</h1>

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
