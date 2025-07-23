import React ,{useState}from 'react'
import {All_Sareer,TrendySilkSarees,FancyCottonSarees} from '../data';


import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AllSareesContainer from '../Components/AllSareesContainer';
import SilkSareesContainer from '../Components/SilkSareesContainer';
import CottonSareesContainer from '../Components/CottonSareesContainer';


const LadiesFashion = () => {
 const [Sarees] = useState(All_Sareer)
 const [Silk] = useState(TrendySilkSarees)
 const [Cotton] = useState(FancyCottonSarees)
  return (
    <div>
     <Header />
      <div className="mainContainer">
             <AllSareesContainer Sarees={Sarees}/>
             <CottonSareesContainer Cotton={Cotton}/>
             <SilkSareesContainer Silk={Silk}/>

      
       <Footer />
      </div>
    </div>
     )
    }
export default LadiesFashion
