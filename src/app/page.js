import Image from 'next/image' 
import Footer3 from './components/Footer/Footer3'
import Footer2 from './components/Footer/Footer2' 
import Footer1 from './components/Footer/Footer1'
import Navbar1 from './components/navbar/Navbar1'

export default function Home() {
  return (
    <main>
<Navbar1/>
<p>Space</p>
<Footer1/>
<p>Space</p>
<Footer2/>
<p>Space</p>
<Footer3/>
<p>Space</p>
    </main>
  )
}
