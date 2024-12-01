import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);

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
      <PageHeader title='Cart' image_url='/header-bg-imgs/shop-cart-img.webp'/>
      
      {cart.length === 0 ? (
            <div className='cart-container subnav-section-container'>
            There are currently no items in your cart.
            <Link to={`/shop`}>
                <button className='primary-button'>Go To Shop</button>
            </Link>
            <Link to={`/donate`}>
                <button className='primary-button'>Donate</button>
            </Link>
          </div>
            
        ) : (
          <>
          <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <p>${parseFloat(item.prices.price * item.quantity / 100).toFixed(2)}</p>
                        <button onClick={() => handleIncrement(item)}>+</button>
                        <button onClick={() => handleDecrement(item)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
                      <div className='total-price'>
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                </div>
            </div>

            <div className='cart-buttons'>
              <Link to={`/shop`}>
                <button className='tertiary-button'>Continue Shopping</button>
              </Link>
              <Link to={`/cartsuccess`}>
                <button className='tertiary-button'>Purchase</button>
              </Link>

            </div>


          </>
            
            
        )} 
    </>
    
  )
}

export default Cart
