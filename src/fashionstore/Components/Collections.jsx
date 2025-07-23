import { Link } from "react-router-dom";

const Collections = (props) => {
   const {image1, image2, image3, image4, image5, image6, image7, image8 } = props.ladiesFashion;
  
  return (
    <div className='collectionSection'>
      <div className="bannerBox">
        <img src="assets/womenBanner.jpg" alt="" />
         <Link to="/ladiesFashion"><button>Ladies Fashion</button></Link>
      </div>
      
     
      
      <div className="womanImages">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        
      </div>
    </div>
  )
}

export default Collections
