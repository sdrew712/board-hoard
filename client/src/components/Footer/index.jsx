import React from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-item left">
        <h1 className="footer-item footer-title">BOARD HOARD</h1>
        <p>Powering the longboarding community with the best decks in the industry.</p>
        <div className="social-links">
          <NavLink to="/">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path
                id="icon-instagram"
                fill="#fff"
                d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2c0-3.4-2.8-6.2-6.2-6.2zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4S17.6 7 18.4 7c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4z"
              />
            </svg>
          </NavLink>

          <NavLink to="/">
            <svg className="svg" width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path
                id="icon-youtube"
                fill="#fff"
                d="M711 1128l484-250-484-253v503zm185-862q168 0 324.5 4.5t229.5 9.5l73 4q1 0 17 1.5t23 3 23.5 4.5 28.5 8 28 13 31 19.5 29 26.5q6 6 15.5 18.5t29 58.5 26.5 101q8 64 12.5 136.5t5.5 113.5v176q1 145-18 290-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19-28 12.5-28.5 8-24 4.5-23 3-16.5 1.5q-251 19-627 19-207-2-359.5-6.5t-200.5-7.5l-49-4-36-4q-36-5-54.5-10t-51-21-56.5-41q-6-6-15.5-18.5t-29-58.5-26.5-101q-8-64-12.5-136.5t-5.5-113.5v-176q-1-145 18-290 7-55 25-99.5t32-61.5l14-17q14-15 29-26.5t31-19.5 28-13 28.5-8 23.5-4.5 23-3 17-1.5q251-18 627-18z"
              />
            </svg>
          </NavLink>

          <NavLink to="/">
            <svg className="svg" width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path
                id="icon-twitter"
                fill="#fff"
                d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
              />
            </svg>
          </NavLink>
        </div>
      </div>

      <div className="footer-item right">
        <h1 className="footer-item">Menu</h1>
        <NavLink to="/">
          <p>Contact Us</p>
        </NavLink>

        <NavLink to="/">
          <p>Returns & Exchanges</p>
        </NavLink>

        <NavLink to="/">
          <p>Terms of Service</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
