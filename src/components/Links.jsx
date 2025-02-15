import {Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from 'react';

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
import CartSuccess from '../pages/CartSuccess'
import SingleAnimal from '../pages/SingleAnimal'
import AvailableAdoptAnimals from './adoptComponents/AvailableAdoptAnimals'

// Auto scroll top when on new page
const ScrollPageTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; 
};

const Links = () => {
  return (
    <>
      <ScrollPageTop />
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
        <Route path='/cartsuccess' element={<CartSuccess/>}/>
        <Route path='/animals' element={<AvailableAdoptAnimals/>}/>
        <Route path='/animals/:id' element={<SingleAnimal/>}/>
      </Routes>
    </>
    
  )
}

export default Links
