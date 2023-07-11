import React from "react";
import logo from "../../../public/assets/Logo.png";
import navStyle from "../../Styles/Navbar4.module.scss";
import Image from "next/image";

const Navbar4 = () => {
  return (
    <div className={navStyle.nav4}>
      <h1>Click the burger menu to see the magic.</h1>
      <input type="checkbox" id={navStyle.burger_toggle} />
      <label for={navStyle.burger_toggle} className={navStyle.burger_menu}>
        <div className={navStyle.line}></div>
        <div className={navStyle.line}></div>
        <div className={navStyle.line}></div>
      </label>
      <div className={navStyle.menu}>
        <div className={navStyle.menu_inner}>
          <ul className={navStyle.menu_nav}>
            <li className={navStyle.menu_nav_item}>
              <a className={navStyle.menu_nav_link} href="#">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li>
            <li className={navStyle.menu_nav_item}>
              <a className={navStyle.menu_nav_link} href="#">
                <span>
                  <div>About</div>
                </span>
              </a>
            </li>
            <li className={navStyle.menu_nav_item}>
              <a className={navStyle.menu_nav_link} href="#">
                <span>
                  <div>Services</div>
                </span>
              </a>
            </li>
            <li className={navStyle.menu_nav_item}>
              <a className={navStyle.menu_nav_link} href="#">
                <span>
                  <div>Team</div>
                </span>
              </a>
            </li>
          </ul>
          <div className={navStyle.gallery}>
            <div className={navStyle.title}>
              <p>Sora Gallery</p>
            </div>
            <div className={navStyle.images}>
              <a className={navStyle.image_link} href="#">
                <div className={navStyle.image} data-label="Star">
                  <Image
                    src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
                    alt=""
                    width={100}
                    height={250}
                  />
                </div>
              </a>
              <a className={navStyle.image_link} href="#">
                <div className={navStyle.image} data-label="Sun">
                  <Image
                    src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"
                    alt=""
                    width={100}
                    height={250}
                  />
                </div>
              </a>
              <a className={navStyle.image_link} href="#">
                <div className={navStyle.image} data-label="Tree">
                  <Image
                    src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
                    alt=""
                    width={100}
                    height={250}
                  />
                </div>
              </a>
              <a className={navStyle.image_link} href="#">
                <div className={navStyle.image} data-label="Sky">
                  <Image
                    src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
                    alt=""
                    width={100}
                    height={250}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
