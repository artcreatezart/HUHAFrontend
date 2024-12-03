import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
// icon imports
import { TiTick } from "react-icons/ti";

const CartSuccess = () => {

  return (
    <>
        <Seo
            title='Order Sent - HUHA Summative'
            description='Thank you for your purchase!'
            url={window.location.href}
        />
        <PageHeader title='Order Sent' image_url='/header-bg-imgs/shop-cart-img.webp'/>
        <div className='cart-success-container'>
          <TiTick className='cart-success-icon'/>
          <h3>THANK YOU FOR YOUR PURCHASES!</h3>
          <h4>With every purchase makes a huge difference to so many animals lives.</h4>
          <div className='cart-success-buttons'>
            <Link to='/'>
                <button className='secondary-button'>Back To Home</button>
            </Link>
            <Link to='/shop'>
                <button className='primary-button'>Back To Shop</button>
            </Link>
          </div>
          

        </div>
        
      
    </>
    
  )
}

export default CartSuccess
