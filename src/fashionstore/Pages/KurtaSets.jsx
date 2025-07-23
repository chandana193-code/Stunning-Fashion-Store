import React ,{useState}from 'react'
import {TrendyKurtaSets} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import KurtaSetsContainer from '../Components/KurtaSetsContainer';
const KurtaSets = () => {
const [KurtaSet] = useState(TrendyKurtaSets)
  return (
    <div className='collection-container'>
         <Header/>
     <KurtaSetsContainer  KurtaSet={KurtaSet}/>
      <Footer/>
    </div>
  )
}

export default KurtaSets;