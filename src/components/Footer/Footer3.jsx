import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/Logo.png";
import footerStyle from "../../Styles/Footer3.module.scss";

const Footer3 = () => {
  return (
    <div>
      <div className={footerStyle.pg_footer}>
        <footer className={footerStyle.footer}>
          <div className={footerStyle.footer_content}>
            <div className={footerStyle.footer_content_column}>
            
              <div className={footerStyle.footer_logo}>
                <a className={footerStyle.footer_logo_link} href="#">
                  <span className={footerStyle.hidden_link_text}>LOGO</span>
                  <Image src={logo} height={50} width={150} alt="logo-image" />

                </a>
              </div>
              <div className={footerStyle.footer_menu}>
                <h2 className={footerStyle.footer_menu_name}> Get Started</h2>
                <ul
                  id="menu-get-started"
                  className={footerStyle.footer_menu_list}
                >
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_product}`}
                  >
                    <a href="#">Start</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_product}`}
                  >
                    <a href="#">Documentation</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_product}`}
                  >
                    <a href="#">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={footerStyle.footer_content_column}>
              <div className={footerStyle.footer_menu}>
                <h2 className={footerStyle.footer_menu_name}> Company</h2>
                <ul id="menu-company" className={footerStyle.footer_menu_list}>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Contact</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_taxonomy} ${footerStyle.menu_item_object_category}`}
                  >
                    <a href="#">News</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className={footerStyle.footer_menu}>
                <h2 className={footerStyle.footer_menu_name}> Legal</h2>
                <ul id="menu_legal" className={footerStyle.footer_menu_list}>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page} ${footerStyle.menu_item_privacy_policy} ${footerStyle.menu_item_170434}`}
                  >
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={footerStyle.footer_content_column}>
              <div className={footerStyle.footer_menu}>
                <h2 className={footerStyle.footer_menu_name}> Quick Links</h2>
                <ul
                  id="menu_quick_links"
                  className={footerStyle.footer_menu_list}
                >
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_custom} ${footerStyle.menu_item_object_custom}`}
                  >
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      Support Center
                    </a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_custom} ${footerStyle.menu_item_object_custom}`}
                  >
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      Service Status
                    </a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Security</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Blog</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type_archive} ${footerStyle.menu_item_object_customer}`}
                  >
                    <a href="#">Customers</a>
                  </li>
                  <li
                    className={`${footerStyle.menu_item} ${footerStyle.menu_item_type_post_type} ${footerStyle.menu_item_object_page}`}
                  >
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={footerStyle.footer_content_column}>
              <div className={footerStyle.footer_call_to_action}>
                <h2 className={footerStyle.footer_call_to_action_title}>
                  {" "}
                  Let's Chat
                </h2>
                <p className={footerStyle.footer_call_to_action_description}>
                  {" "}
                  Have a support question?
                </p>
                <a
                  className={`${footerStyle.footer_call_to_action_button} ${footerStyle.button}`}
                  href="#"
                  target="_self"
                >
                  {" "}
                  Get in Touch{" "}
                </a>
              </div>
              <div className={footerStyle.footer_call_to_action}>
                <h2 className={footerStyle.footer_call_to_action_title}>
                  {" "}
                  You Call Us
                </h2>
                <p className={footerStyle.footer_call_to_action_link_wrapper}>
                  {" "}
                  <a
                    className={footerStyle.footer_call_to_action_link}
                    href="tel:0124_64XXXX"
                    target="_self"
                  >
                    {" "}
                    0124_64XXXX{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={footerStyle.footer_copyright}>
            <div className={footerStyle.footer_copyright_wrapper}>
              <p className={footerStyle.footer_copyright_text}>
                <a
                  className={footerStyle.footer_copyright_link}
                  href="#"
                  target="_self"
                >
                  {" "}
                  ©{new Date().getFullYear() }. | Designed By: Blackstar. | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer3;
