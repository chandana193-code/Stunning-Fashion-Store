
import React ,{useState}from 'react'
import {BoysSet} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BoysContainer from '../Components/BoysContainer';
const Boys = () => {
const [BoysCollections] = useState(BoysSet)
  return (
    <div className='collection-container'>
         <Header/>
     <BoysContainer  BoysCollections={BoysCollections}/>
      <Footer/>
    </div>
  )
}

export default Boys;