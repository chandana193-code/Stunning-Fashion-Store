import React ,{useState}from 'react'
import {TraditionalTshirts} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import TshirtsContainer from '../Components/TshirtsContainer';

const Tshirts = () => {
const [NewTshirts] = useState(TraditionalTshirts)
  return (
    <div className='collection-container'>
         <Header/>
     <TshirtsContainer  NewTshirts={NewTshirts}/>
      <Footer/>
    </div>
  )
}

export default Tshirts;