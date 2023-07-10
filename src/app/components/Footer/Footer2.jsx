import React from "react";
import footerStyle from "../../../Styles/Footer2.module.scss";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Footer2 = () => {
  return (
    <div>
      <footer>
        <div className={footerStyle.footer}>
          <div className={footerStyle.socials}>
            <div className={footerStyle.social_row}>
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsYoutube />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className={footerStyle.row}>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className={footerStyle.row}>
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed
            By: Mahesh
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
