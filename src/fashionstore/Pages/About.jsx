import React from 'react'
import '../Styling/About.css'
import Header from '../Components/Header';

import Footer from '../Components/Footer';

const About = () => {
  return (
   
    
      
      <div className="about-maincontainer">
        <Header />
        <div className="maincontainer-info">
          <h1>About Us</h1>
          <div className='condition-info'>
        <p>Stunning Fashion Store has a perfect clothing designing team which passionately
         believes in creating affordable sustainable designer fashion for women,men and kids of all ages.</p>
         <br/>
        <p>Stunning Fashion Store does believe that fast fashion can cause more harm than good.
           Its our aim to have a responsible and sustainable approach in fashion.</p>
           <br/>
        <p>Our collection extensively uses South Handlooms,
         Natural fibers like Cottons & Linens, Handblock prints, Vegetable Dyes, 
         Indigo Prints, Kalamkari Prints, Dhaboo Prints, Bagru Prints, Kutchi Ajrakh Prints, 
         Ikkats and Batiks. We work with Master Artisans across India, to bring to you the charm, 
         colours and aesthetics of India's rich textile heritage. Trends may come and go, however 
         these traditional Indian fabrics never will go out of fashion.
       </p>
      </div>
      </div>
     <div/>
      <Footer />
      </div>
  )
}

export default About;
