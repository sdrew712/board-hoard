import React from "react";
import { Link } from "react-router-dom";

const NavBox = ({ text, nav }) => {
  if (nav) {
    return (
      <Link to={`/shop?category=${text}`}>
        <div style={{ backgroundColor: "aqua" }}>
          <h2>{text}</h2>
        </div>
      </Link>
    );
  } else {
    return (
      <div style={{ backgroundColor: "aqua" }}>
        <h2>{text}</h2>
      </div>
    );
  }
};

export default NavBox;
