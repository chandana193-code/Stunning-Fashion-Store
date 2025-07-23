
import React ,{useState}from 'react'
import {TraditionalCottonDressMaterials} from '../data';
import CottonMaterailContainer from '../Components/CottonDressMaterialCotainer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CottonDressMaterials = () => {
const [NewCottonMaterials] = useState(TraditionalCottonDressMaterials)
  return (
    <div className='collection-container'>
         <Header/>
     <CottonMaterailContainer NewCottonMaterials={NewCottonMaterials}/>
      <Footer/>
    </div>
  )
}

export default CottonDressMaterials