

import React, { useState } from 'react'
import '../Pages/LoginForm';
import '../Pages/Cart.jsx';
 import '../../fashionstore/Styling/Header.css';
 import { Link } from 'react-router-dom';



const Header = () => {
  
    
 
   const [isOpen, setIsOpen] = useState({
    Woman: false,
    Men: false,
    Kids: false
  });

    // Function to handle mouse over
    const handleMouseOver = (menu) => {
        setIsOpen((prevState)=>({
            ...prevState,
            [menu]:true
        }));
    };

    // Function to handle mouse leave
    const handleMouseLeave = (menu) => {
        setIsOpen((prevState)=>({
            ...prevState,
            [menu]:false
        }));
    };

  return (
   
   
    <div className='headerSection'>
        <div className="left">
          
           
            <img src="./assets/stunning1.png" alt=" "   className='logoSettings'/ >
            tunning store
        </div>
        <div className="center">
            <ul>

                <li className="dropdown" >
                    <Link to='/'>
                    <button className="dropdown-button">Home</button>
                    </Link>
                    
                   
                </li>
                
                <li 
                    className="dropdown" 
                    onMouseOver={()=>handleMouseOver('Woman')} 
                    onMouseLeave={()=>handleMouseLeave('Woman')}
                >
                    <button className="dropdown-button">Women</button>
                    {isOpen.Woman && (
                        <div className="dropdown-content">
                           <div className="dropdown-content-menu">
                            <div className="sarees">
                            <p>Sarees</p>
                            <Link to="/allSarees"><button>All Sarees</button></Link>
                            <Link to="/silkSarees"><button>Silk Sarees</button></Link>
                            <Link to="/cottonSarees"><button>Cotton Sarees</button></Link>
                          
                           </div>
                            <div className="kurtaSets">
                                <p>Kurta Sets</p>
                            <Link to="/Kurtis"><button>All Kurti Sets</button></Link>
                            <Link to="/cottonKurti"><button>Cotton Kurti Sets</button></Link>
                            
                            </div>
                            <div className="materials">
                                <p>Dress Material</p>
                             <Link to="/allMaterials"><button>All Dress Materials</button></Link>
                             
                             <Link to="/cottonMaterials"><button>Cotton Dress Materials</button></Link>
                            </div>
                           </div>
                        </div>
                    )}
                </li>
                 <li 
                    className="dropdown" 
                    onMouseOver={()=>handleMouseOver('Men')} 
                    onMouseLeave={()=>handleMouseLeave('Men')}
                >
                    <button className="dropdown-button">Men</button>
                    {isOpen.Men && (
                        <div className="dropdown-content">
                            <div className="dropdown-content-menu">
                            <div className="TopWear">
                            <p>Top Wear</p>

                            <Link to="/shirts"><button>Shirts</button></Link>
                       
                            <Link to="/tShirts"><button>Tshirts</button></Link>
                            <Link to="/kurtaSets"><button>Kurta Sets</button></Link>
                           </div>
                            <div className="BottomWear">
                                <p>Bottom Wear</p>
                            <Link to="/jeans"><button>Jeans</button></Link>
                            <Link to="/shorts"><button>Shorts</button></Link> 
                            </div>
                           
                           </div>
                       
                           
                        </div>
                    )}
                </li>
                 <li 
                    className="dropdown" 
                    onMouseOver={()=>handleMouseOver('Kids')} 
                    onMouseLeave={()=>handleMouseLeave('Kids')}
                >
                    <button className="dropdown-button">Kids</button>
                    {isOpen.Kids && (
                        <div className="dropdown-content">
                            <div className="dropdown-content-menu">
                            <div className="boys_girls">
                            <p>Boys & Girls 2+ years</p>
                            <Link to="/dresses"><button>Dresses</button></Link>
                            <Link to="/boys"><button>Boys Sets</button></Link>
                            <Link to="/girls"><button>Girls Sets</button></Link>
                           </div>
                            <div className="boyscollections">
                                <p>Boys Collections</p>
                            <Link to="/boysJeans"><button>Jeens</button></Link>
                            <Link to="/boysShirts"><button>Shirts</button></Link>
                            
                            
                            </div>
                            <div className="girlscollections">
                                <p>Girls Collections</p>
                             <Link to="/dresses"><button>Frocks & Dresses</button></Link>
                             <Link to="/plazo"><button>Plazo sets</button></Link>
                          
                             
                            </div>
                           </div>
                        </div>
                    )}
                </li>
                 

                <li className="contact-page" >
                    <Link to='/contact'>
                    <button className="dropdown-button">Contact Us</button>
                    </Link>
                    
                    
                </li>
               
                
                
            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='Search...' />
        </div>
        <div className="right">
            
           <div className="menu-item1">
            <Link to="/loginForm">
            <button >
            <i class="fa-solid fa-user"></i>
            Login
           </button>
          
            </Link>
           
           </div>
          
           <div className="menu-item2">
            <Link to='/cart'>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>
              cart
                </button>
                </Link>
           
           </div>
    
        </div>
    </div>
  )
}

export default Header;
