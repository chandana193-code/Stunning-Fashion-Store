
import React ,{useState}from 'react'
import {All_Sareer} from '../data';
import AllSareesContainer from '../Components/AllSareesContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AllSarees = () => {
const [Sarees] = useState(All_Sareer)
  return (
    <div className='collection-container'>
         <Header/>
     <AllSareesContainer Sarees={Sarees}/>
      <Footer/>
    </div>
  )
}

export default AllSarees