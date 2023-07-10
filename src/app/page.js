import Image from 'next/image' 
import homeStyle from '../Styles/Home.module.scss'
import Footer4 from './components/Footer/Footer4'
import Footer3 from './components/Footer/Footer3'
import Footer2 from './components/Footer/Footer2' 
import Footer1 from './components/Footer/Footer1'
import Navbar1 from './components/navbar/Navbar1'
import Navbar2 from './components/navbar/Navbar2'
import Navbar3 from './components/navbar/Navbar3'
import Navbar4 from './components/navbar/Navbar4'

export default function Home() {
  return (
    <main>
      <Navbar4/>
{/* <p className={homeStyle.text_style}>Second Navbar</p>
<Navbar2/> */}
{/* <p className={homeStyle.text_style}>First Navbar</p>
<Navbar1/> */}
{/* <p className={homeStyle.text_style}>First Navbar</p>
<Navbar3/> */}
{/* <p className={homeStyle.text_style}>First Footer with glassmophism</p>
<Footer1/>
<p className={homeStyle.text_style}>Second Footer</p>
<Footer2/>
<p className={homeStyle.text_style}>Third Footer</p>
<Footer3/>
<p className={homeStyle.text_style}>Fourth Footer</p>
<Footer4/> */}
    </main>
  )
}
