
import React ,{useState}from 'react'
import {StylishPlazoSets} from '../data';
import PlazoSetsContainer from '../Components/PlazoSetsContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const PlazoSets = () => {
const [NewPlazos] = useState(StylishPlazoSets)
  return (
    <div className='collection-container'>
         <Header/>
     <PlazoSetsContainer NewPlazos={NewPlazos}/>
      <Footer/>
    </div>
  )
}

export default PlazoSets