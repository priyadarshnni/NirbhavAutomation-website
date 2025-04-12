import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import dark_arrow from "../../assets/dark-arrow.png";

// Import your images directly from the assets directory
import image1 from "../../assets/image.1.jpeg";
import image2 from "../../assets/image.2.jpeg";
import image3 from "../../assets/image.3.jpeg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,

    className: "custom-slider",
  };

//her


  // Update the images array with the imported images
  const images = [image1, image2, image3];
const texts = [
    {
      title: "We provide better automation for a better world",
      description: "Sustainable solutions that minimize burdens on people and the environment, respect human rights, and encourage responsible manufacturing",
    },
    {
      title: "Innovative Solutions for a Sustainable Future",
      description: "Leading the Way in Technology and Innovation",
    },
    {
      title: "Commitment to Excellence and Integrity",
      description: "We strive to deliver the best in every aspect of our work"
    }
  ];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
            <div className="text-overlay">
              <h1>{texts[index].title}</h1>
              <p>{texts[index].description}</p>
              <button className="btn">
                {" "}
                Explore more <img src={dark_arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
