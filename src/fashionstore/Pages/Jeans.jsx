
import React ,{useState}from 'react'
import {TrendyJeans} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import JeansContainer from '../Components/JeansContainer';

const Jeans = () => {
const [JeansPants] = useState(TrendyJeans)
  return (
    <div className='collection-container'>
         <Header/>
     <JeansContainer  JeansPants={JeansPants}/>
      <Footer/>
    </div>
  )
}

export default Jeans;