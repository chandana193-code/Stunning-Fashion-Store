
import React ,{useState}from 'react'
import {StylishBoysJeans} from '../data';
import BoysJeansContainer from '../Components/BoysJeansContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BoysJeans = () => {
const [NewJeans] = useState(StylishBoysJeans)
  return (
    <div className='collection-container'>
         <Header/>
     <BoysJeansContainer NewJeans={NewJeans}/>
      <Footer/>
    </div>
  )
}

export default BoysJeans