
import React ,{useState}from 'react'
import {CottonKurtis} from '../data';
import CottonKurtiSetsContainers from '../Components/CottonKurtiSetsContainers';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CottonKurtiSets = () => {
const [NewCottonKurtis] = useState(CottonKurtis)
  return (
    <div className='collection-container'>
         <Header/>
     <CottonKurtiSetsContainers NewCottonKurtis={NewCottonKurtis}/>
      <Footer/>
    </div>
  )
}

export default CottonKurtiSets