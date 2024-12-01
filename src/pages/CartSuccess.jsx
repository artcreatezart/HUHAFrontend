import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const CartSuccess = () => {

  return (
    <>
        <Seo
            title='Order Sent - HUHA Summative'
            description='Thank you for your purchase!'
            url={window.location.href}
        />
        <PageHeader title='Order Sent' image_url='/header-bg-imgs/shop-cart-img.webp'/>

        <Link to='/'>
            <button className='primary-button'>Back To Home</button>
        </Link>
        <Link to='/shop'>
            <button className='primary-button'>Continue Shopping</button>
        </Link>
      
    </>
    
  )
}

export default CartSuccess
