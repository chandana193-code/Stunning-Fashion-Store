
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { Link } from 'react-router-dom';
import '../Styling/Cart.css';
const Cart = () => {
  return (
    <div className='cart-maincontainer'>
        <Header/>
       
       <div className='cartContainer'>
         <p>your cart is currectly emty</p>
        <div className='cart-button'> 
          <Link to='/'>
          <button>Continue Shopping</button>
          </Link>
        </div>
       </div>
        <Footer/>
   
    
    </div>
  )
}

export default Cart;