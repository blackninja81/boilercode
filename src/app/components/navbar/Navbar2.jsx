import React from 'react'
import navStyle from '../../../Styles/Navbar2.module.scss'

const Navbar2 = () => {
  return (
    <div>
        <input type="checkbox" className={navStyle.check_box} id={navStyle.active}/>
    <label for={navStyle.active} className={navStyle.menu_btn}><span></span></label>
    <label for={navStyle.active} className={navStyle.close}></label>
    <div className={navStyle.wrapper}>
      <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Gallery</a></li>
<li><a href="#">Feedback</a></li>
</ul>
</div>
{/* <div className={navStyle.content}>
      <div className={navStyle.title}>
Fullscreen Overlay Navigation Bar</div>
<p>
(Hamburger Menu-2)</p>
</div> */}
    </div>
  )
}

export default Navbar2