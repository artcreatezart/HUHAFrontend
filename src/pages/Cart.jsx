import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'

const Cart = () => {
  return (
    <>
      <Seo
        title='Cart - HUHA Summative'
        description='Purchase items in your cart or continue shpopping!'
        url={window.location.href}
      />
      <PageHeader title='Cart' image_url='/header-bg-imgs/shop-cart-img.webp'/>
      <div className='cart-container subnav-section-container'>
        Cart
      </div>
    </>
    
  )
}

export default Cart
