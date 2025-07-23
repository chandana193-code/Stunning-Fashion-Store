import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styling/ShippingPolicy.css';
const ShippingPolicy = () => {
  return (
    <div className="shippingPolicy-maincontainer">
        <Header />
        <div className="maincontainer-info">
        <h1>Shipping Policy - India and Worldwide</h1>
        <div className='condition-info'>
           <h3>Shipping Policy</h3>
             <br/>
             <p> <strong>Shipping Details for PRE-ORDER Movie Recreation Products</strong></p>
            
               <br/>
               <p>We are Taking PRE-ORDERS for Movie Recreation Products.
                 So Normal Delivery Period Will NOT apply for Movie Recreation Products.</p>
             <br/>
                <p>So before placing the order, kindly check the Product Title and Description 
                  for all Movie Recreation Products to know the Delivery Timelines.</p>
            <br/>

        </div>
        </div>
        <Footer />
    </div>
  )
}

export default ShippingPolicy