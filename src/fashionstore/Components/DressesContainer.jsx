


const DressesContainer =(props) =>{
    const{image1, image2, image3, image4, image5, image6, image7, image8,image9, image10,image11, image12, image13, image14, image15,image16,image17,image18 } = props.NewDresses;
 
    return(
        
    <div className="cloth_img_main_styling">
        <div className="cloth_img_styling">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt=""/>
        <img src={image5} alt="" />
        <img src={image6} alt=""/>
        </div>
        <div className="cloth_img_styling">
       
        <img src={image7} alt="" />
        <img src={image8} alt=""/>
        <img src={image9} alt="" />
        <img src={image10} alt=""/>
           <img src={image11} alt="" />
        <img src={image12} alt="" />
        </div>
       <div className="cloth_img_styling">
        
        <img src={image13} alt=""/>
        <img src={image14} alt="" />
        <img src={image15} alt=""/>
           <img src={image16} alt="" />
             <img src={image17} alt="" />
              <img src={image18} alt="" />
       </div>

    </div>
 )

}
export default DressesContainer;