import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/ant.jpg";
import image2 from "../../assets/ferret .jpg";
import image3 from "../../assets/dragon.jpg";
import image4 from "../../assets/sleep.jpg";
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
        </AliceCarousel>
      </div>
    </>
  );
}

export default Images;
