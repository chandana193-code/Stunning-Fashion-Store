import React ,{useState}from 'react'
import {TrendyShirts,TraditionalTshirts,TrendyJeans,TrendyKurtaSets} from '../data';


import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ShirtsContainer from '../Components/ShirtsContainer'
import JeansContainer from '../Components/JeansContainer';
import TshirtsContainer from '../Components/TshirtsContainer';
import KurtaSetsContainer from '../Components/KurtaSetsContainer';

const GentsFashion = () => {
 const [Shirts] = useState(TrendyShirts)
 const [JeansPants] = useState(TrendyJeans)
const [NewTshirts] = useState(TraditionalTshirts)
const [KurtaSet] = useState(TrendyKurtaSets)
  return (
    <div>
     <Header />
      <div className="mainContainer">
        <ShirtsContainer Shirts={Shirts}/>
         <JeansContainer  JeansPants={JeansPants}/>
        <TshirtsContainer  NewTshirts={NewTshirts}/>
        <KurtaSetsContainer  KurtaSet={KurtaSet}/>
      
       <Footer />
      </div>
    </div>
     )
    }
export default GentsFashion
