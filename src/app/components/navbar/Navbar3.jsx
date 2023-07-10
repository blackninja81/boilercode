import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/Logo.png";
import navStyle from "../../../Styles/Navbar3.module.scss";

const Navbar3 = () => {
  return (
    <div className={navStyle.nav3}>
      <a href="https://front.codes/" className={navStyle.logo} target="_blank">
        <Image src={logo} height={50} width={150} alt="" />
      </a>

      <input
        className={navStyle.menu_icon}
        type="checkbox"
        id={navStyle.menu_icon}
        name={navStyle.menu_icon}
      />
      <label for={navStyle.menu_icon}></label>
      <nav className={navStyle.nav}>
        <ul className={navStyle.pt_5}>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* <div className={navStyle.section_center}>
        <h1 className="mb-0">Pure CSS Menu</h1>
      </div> */}
    </div>
  );
};

export default Navbar3;
