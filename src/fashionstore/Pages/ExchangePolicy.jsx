import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styling/ExchangePolicy.css'

const ExchangePolicy = () => {
  return (
    <div className="exchangePolicy-maincontainer">
        <Header />
        <div className="maincontainer-info">
          <h1>Exchange Policy</h1>
          <div className='condition-info'>
        <p>No Exchanges for purchases made during Sale Period.</p>
         <br/>
        <p>Any final decision regarding exchange rests with the Stunning Fashion Store Online Team. Kindly read the policy before purchasing.</p>
           <br/>
        <p>We also request you to check the size guide before making any purchase.</p>
        <br/>
        <p>1) Exchange is possible only within 7 days from the date of delivery. Exchanges are possible once for any given   order.</p>
        <br/>
        <p>2) The garment should be fresh with the price tags intact.</p>
        <br/>
        <p>3) The address to which the garment has to be sent for exchange :</p>

        <div className="contact-info-section">
         
          <p><strong>Stunning Fashion Store</strong></p>
          <p><strong>WhatsApp us :</strong> +91 9390441208</p>
          <p><strong>Email us :</strong> stunningfashionstore@gmail.com</p>
          <p><strong>Call us :</strong> +91 9390441208</p>
          <p>(10.30 AM to 06.30 PM, All days)</p>
          
        </div>

      </div>
      </div>
     <div/>
        <Footer />

    </div>
  )
}

export default ExchangePolicy;