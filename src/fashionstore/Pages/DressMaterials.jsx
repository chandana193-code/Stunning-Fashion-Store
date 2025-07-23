
import React ,{useState}from 'react'
import {TrendyDressMaterials} from '../data';
import DressMaterialsContainer from '../Components/DressMaterialContainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const DressMaterials = () => {
const [StylishDressMaterials] = useState(TrendyDressMaterials)
  return (
    <div className='collection-container'>
         <Header/>
     <DressMaterialsContainer StylishDressMaterials={StylishDressMaterials}/>
      <Footer/>
    </div>
  )
}

export default DressMaterials