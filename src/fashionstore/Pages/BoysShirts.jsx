
import React ,{useState}from 'react'
import {TrendyBoysShirts} from '../data';
import BoysShirtsContainer from '../Components/BoysShirtsContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BoysShirts = () => {
const [NewBoysShirts] = useState(TrendyBoysShirts)
  return (
    <div className='collection-container'>
         <Header/>
     <BoysShirtsContainer NewBoysShirts={NewBoysShirts}/>
      <Footer/>
    </div>
  )
}

export default BoysShirts