import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/ant.jpg";
import image2 from "../../assets/ferret .jpg";
import image3 from "../../assets/dragon.jpg";
import image4 from "../../assets/sleep.jpg";
import image5 from "../../assets/troll 2.jpg";
import image6 from "../../assets/repunzal.jpg";
import image7 from "../../assets/sunbathing.jpg";
import image8 from "../../assets/cake_Megan Walker copy.jpg";
import image9 from "../../assets/sleepy boi.jpg";
import image10 from "../../assets/dino.jpg";

import "./../images/images.css";

function Images() {
  return (
    <>
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg" />
          <img src={image2} className="sliderimg" />
          <img src={image3} className="sliderimg" />
          <img src={image4} className="sliderimg" />
          <img src={image5} className="sliderimg" />
          <img src={image6} className="sliderimg" />
          <img src={image7} className="sliderimg" />
          <img src={image8} className="sliderimg" />
          <img src={image9} className="sliderimg" />
          <img src={image10} className="sliderimg" />
        </AliceCarousel>
      </div>
    </>
  );
}

export default Images;
