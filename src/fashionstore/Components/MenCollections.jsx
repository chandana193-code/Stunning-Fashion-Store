import { Link } from "react-router-dom"

const MenCollections = (props) => {
    const{ image1, image2, image3, image4, image5, image6, image7, image8}=props.gentsFashion

  return (
    <div className='mencollectionSection'>
        <div className="bannerBox">
        <img src="assets/menbanner.jpg" alt="" />
            <Link to="/gentsFashion"><button> Gents Fashion</button></Link>

      </div>
      <div className="menImages">
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

export default MenCollections