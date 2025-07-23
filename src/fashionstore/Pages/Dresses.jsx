
import React ,{useState}from 'react'
import {StylishDresses} from '../data';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DressesContainer from '../Components/DressesContainer';

const Dresses = () => {
const [NewDresses] = useState(StylishDresses)
  return (
    <div className='collection-container'>
         <Header/>
     <DressesContainer  NewDresses={NewDresses}/>
      <Footer/>
    </div>
  )
}

export default Dresses;