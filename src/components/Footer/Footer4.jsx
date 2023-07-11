import React from 'react'
import logo from "../../../public/assets/Logo.png";
import navStyle from "../../Styles/Footer4.module.scss";

const Footer4 = () => {
  return (
    <div>
        <footer className={navStyle.footer}>
  <div className={navStyle.footer__addr}>
    <h1 className={navStyle.footer__logo}>Something</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br/>
          
      <a className={navStyle.footer__btn} href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className={navStyle.footer__nav}>
    <li className={navStyle.nav__item}>
      <h2 className={navStyle.nav__title}>Media</h2>

      <ul className={navStyle.nav__ul}>
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li className={`${navStyle.nav__item} ${navStyle.nav__item__extra}`}>
      <h2 className={navStyle.nav__title}>Technology</h2>
      
      <ul className={`${navStyle.nav__ul} ${navStyle.nav__ul__extra}`}>
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li className={navStyle.nav__item}>
      <h2 className={navStyle.nav__title}>Legal</h2>
      
      <ul className={navStyle.nav__ul}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className={navStyle.legal}>
    <p>&copy; {new Date().getFullYear() } Something. All rights reserved.</p>
    
    <div className={navStyle.legal__links}>
      <span>Made with <span className={navStyle.heart}>♥</span> remotely from Anywhere</span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer4