import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styling/Contact.css'

const Contact = () => {
  return (
    <div className="contact-maincontainer">
      <Header />
      <div className='contact-subcontainer'>
      <div  className="contact-title" >
        <h1>Contact Us</h1>
        <h3>Questions? Comments? Get in touch with you by filling out the form below.</h3>
      
      </div>
      <div className="mainSection">
       <div className="contact-info-section">
         
          <h4>Stunning Fashion Store</h4>
          <p><span>WhatsApp us :</span> +91 9390441208</p>
          <p><span>Email us :</span> stunningfashionstore@gmail.com</p>
          <p><span>Call us :</span> +91 9390441208</p>
          <p>(10.30 AM to 06.30 PM, All days)</p>
          
             <form action="#">
              <div className="form-container">
             <div className="form-info">
               <input type="text"  placeholder="Name" required/>
             </div>
             <div className="form-info">
              <input type="text"  placeholder="E-mail" required/> 
              </div>
              <div className="form-massage">
                 <input type="text"  placeholder="Message"/>
              </div>
              <div className="form-button">
                <input type="submit" value='submit'/>
              </div>
             </div>
             </form>

        </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default Contact
