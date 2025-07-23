
import React ,{useState}from 'react'
import {TraditionalAllKurtis} from '../data';
import KurtiSetContainer from '../Components/KurtiSetContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const KurtiSet = () => {
const [NewKurtiSets] = useState(TraditionalAllKurtis)
  return (
    <div className='collection-container'>
         <Header/>
     <KurtiSetContainer NewKurtiSets={NewKurtiSets}/>
      <Footer/>
    </div>
  )
}

export default KurtiSet