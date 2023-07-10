'use client'
import React from "react";
import { useState } from "react";
import navStyle from "../../../Styles/Navbar4.module.scss";

const Navbar4 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  return (
    <div className={navStyle.nav4}>
      <input
        id={navStyle.page_nav_toggle}
        className={navStyle.main_navigation_toggle}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label for={navStyle.page_nav_toggle}>
        <svg className={navStyle.icon__menu_toggle} viewBox="0 0 60 30">
          <g className={navStyle.icon_group}>
            <g className={navStyle.icon__menu}>
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className={navStyle.icon__close}>
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav className={navStyle.main_navigation}>
        <ul>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
          <li>
            <a href="#0">Dance</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar4;
