

import React ,{useState}from 'react'
import {TrendySilkSarees} from '../data';
import SilkSareesContainer from '../Components/SilkSareesContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const SilkSarees = () => {
const [Silk] = useState(TrendySilkSarees)
  return (
    <div className='collection-container'>
         <Header/>
     <SilkSareesContainer Silk={Silk}/>
      <Footer/>
    </div>
  )
}

export default SilkSarees;