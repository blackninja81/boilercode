import React from "react";
import Image from "next/image";
import logo from '../../../../public/assets/Logo.png'
import footerStyle from "../../../Styles/Footer1.module.scss";

const Footer1 = () => {
  return (
    <div>
      <footer className={footerStyle.footer1}>
        <div className={footerStyle.content}>
          <div className={footerStyle.top}>
            <div className={footerStyle.logo_details}>
              <i className="fab fa-slack"></i>
              <a href="#">
          <Image src={logo} height={50} width={150} alt="logo-image" />
        </a>
            </div>
            <div className={footerStyle.media_icons}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className={footerStyle.link_boxes}>
          <ul className={footerStyle.box}>
              <li className={footerStyle.link_name}>Subscribe</li>
              <li className={footerStyle.input_box}>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
            <ul className={footerStyle.box}>
              <li className={footerStyle.link_name}>Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
            <ul className={footerStyle.box}>
              <li className={footerStyle.link_name}>Services</li>
              <li>
                <a href="#">App design</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Logo design</a>
              </li>
              <li>
                <a href="#">Banner design</a>
              </li>
            </ul>
            <ul className={footerStyle.box}>
              <li className={footerStyle.link_name}>Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul className={footerStyle.box}>
              <li className={footerStyle.link_name}>Courses</li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Photoshop</a>
              </li>
            </ul>
            
          </div>
        </div>
        <div className={footerStyle.bottom_details}>
          <div className={footerStyle.bottom_text}>
            <span className={footerStyle.copyright_text}>
              Copyright © {new Date().getFullYear() } All rights reserved
            </span>
            <span className={footerStyle.policy_terms}>
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
