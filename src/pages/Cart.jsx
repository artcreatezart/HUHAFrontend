import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, updateCart, removeFromCart, clearCart } = useContext(CartContext);

  const handleIncrement = (item) => {
    updateCart(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        updateCart(item.id, item.quantity - 1);
    } else {
        removeFromCart(item.id);
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.prices.price *item.quantity;
  }, 0) / 100;

  return (
    <>
      <Seo
        title='Cart - HUHA Summative'
        description='Purchase items in your cart or continue shpopping!'
        url={window.location.href}
      />
      <div className='page-container'>
        <PageHeader title='Cart' image_url='/header-bg-imgs/shop-cart-img.webp'/>
        
        {cart.length === 0 ? (
          <div className='subnav-section-container'>
              There are currently no items in your cart.
              <div className='cart-no-items-buttons'>
                <Link to={`/shop`}>
                    <button className='primary-button cart-button'>Go To Shop</button>
                </Link>
                <Link to={`/donate`}>
                    <button className='primary-button cart-button'>Donate</button>
                </Link>
              </div>
              
            </div>
              
          ) : (
            <div className='cart-container'>
              <div className='four-column-grid-container'>
                {cart.map((item) => (
                    <div key={item.id} className='product-card'>
                      <h3>{item.name}</h3>
                      <img
                        src={item.images[0]?.src || '/placeholder.jpg'}
                        alt={item.name}
                        className='product-card-img'
                      />  
                      <p>Quantity: {item.quantity}</p>
                      <p>${parseFloat(item.prices.price * item.quantity / 100).toFixed(2)}</p>
                      <div className='cart-item-buttons'>
                        <button onClick={() => handleIncrement(item)} className='primary-button plus-button'>+</button>
                        <button onClick={() => handleDecrement(item)} className='tertiary-button minus-button'>-</button>
                        <button onClick={() => removeFromCart(item.id)} className='tertiary-button remove-button'>Remove</button>
                      </div>
                      
                    </div>
                ))}
              </div>

              <h3 className='total-text'>Total: ${totalPrice.toFixed(2)}</h3>

              <div className='cart-buttons'>
                <Link to={`/shop`}>
                  <button className='tertiary-button cart-button'>Continue Shopping</button>
                </Link>
                <Link to={`/cartsuccess`}
                  onClick={() => clearCart()}>
                  <button className='primary-button cart-button'>Purchase</button>
                </Link>

              </div>


            </div>
              
              
          )} 
      </div>
      
    </>
    
  )
}

export default Cart
