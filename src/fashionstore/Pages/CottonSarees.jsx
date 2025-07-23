

import React ,{useState}from 'react'
import {FancyCottonSarees} from '../data';
import CottonSareesContainer from '../Components/CottonSareesContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CottonSarees = () => {
const [Cotton] = useState(FancyCottonSarees)
  return (
    <div className='collection-container'>
         <Header/>
     <CottonSareesContainer Cotton={Cotton}/>
  
      <Footer/>
    </div>
  )
}

export default CottonSarees;