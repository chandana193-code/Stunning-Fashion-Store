
import React ,{useState}from 'react'
import {GirlsSet} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GirlsContainer from '../Components/GirlsContainer';
const Girls = () => {
const [girlsCollections] = useState(GirlsSet)
  return (
    <div className='collection-container'>
         <Header/>
     <GirlsContainer  girlsCollections={girlsCollections}/>
      <Footer/>
    </div>
  )
}

export default Girls;