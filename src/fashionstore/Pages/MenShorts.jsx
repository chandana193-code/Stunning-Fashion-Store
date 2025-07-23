
import React ,{useState}from 'react'
import {CommanMenShorts} from '../data';
import MenShortsContainer from '../Components/MenShortsContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MenShorts = () => {
const [NewShorts] = useState(CommanMenShorts)
  return (
    <div className='collection-container'>
         <Header/>
     <MenShortsContainer NewShorts={NewShorts}/>
      <Footer/>
    </div>
  )
}

export default MenShorts