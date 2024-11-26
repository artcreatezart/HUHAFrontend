import {Routes, Route} from 'react-router-dom'

// Import Pages
import Home from '../pages/Home'
import About from '../pages/About'
import OurImpact from '../pages/OurImpact'
import Support from '../pages/Support'
import Adopt from '../pages/Adopt'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Shop from '../pages/Shop'
import Donate from '../pages/Donate'

const Links = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ourimpact' element={ <OurImpact/> }/>
      <Route path='/support' element={ <Support/> }/>
      <Route path='/adopt' element={<Adopt/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/donate' element={<Donate/>} />
      </Routes>
  )
}

export default Links
