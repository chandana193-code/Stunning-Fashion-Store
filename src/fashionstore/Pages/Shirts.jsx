import React ,{useState}from 'react'
import {TrendyShirts} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ShirtsContainer from '../Components/ShirtsContainer';

const Shirts = () => {
const [Shirts] = useState(TrendyShirts)
  return (
    <div className='collection-container'>
         <Header/>
     <ShirtsContainer Shirts={Shirts}/>
      <Footer/>
    </div>
  )
}

export default Shirts;