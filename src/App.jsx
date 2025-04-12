import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ProductPage from "./Components/ProductPage/ProductPage";
import Video from "./Components/video/video";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />

      <ImageSlider />
      <div className="container">
        <ProductPage />
        <Video />
        <Programs />

        <About setPlayState={setPlayState} />
        <Title subTitle="TESTIMONIALS" title="Hear What Others Have to Say" />
        <Campus />

        <Title subTitle="TESTIMONIALS" title="OUR TEAM" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />

        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
