
import React,{useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Collections from '../Components/Collections'
import {Ladies, Gents} from '../data'
import MenCollections from '../Components/MenCollections'
const MainPage = () => {
  const [ladiesFashion] = useState(Ladies)
  const [gentsFashion] = useState(Gents)
  return (
    <div>
     <Header />
      <div className="mainContainer">
       <Collections ladiesFashion={ladiesFashion}/>
       <MenCollections gentsFashion={gentsFashion}/>
       <Footer />
      </div>
    </div>
     )
    }
export default MainPage
