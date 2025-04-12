import React, { useEffect, useState, useRef } from "react";
import "./ProductPage.css";
import productimage from "../../assets/productimage.jpg";
import productvideo from "../../assets/productvideo.mp4";

const words = ["WRAPPING", "STRAPPING", "TAPING"];

const ProductPage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const videoRef = useRef(null);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedWord === words[currentWordIndex]) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(100);
      }, 2000); // Pause before starting deletion
    } else if (isDeleting && displayedWord === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
      setTypingSpeed(200);
    } else {
      timeout = setTimeout(() => {
        setDisplayedWord(
          (prev) =>
            isDeleting
              ? words[currentWordIndex].substring(0, prev.length - 1) // Delete character
              : words[currentWordIndex].substring(0, prev.length + 1) // Add character
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [displayedWord, isDeleting, typingSpeed, currentWordIndex]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handlePlayVideo = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayVideo, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="product-page">
      <div className="text-section">
        <h1 className="heading">
          {displayedWord.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="description">
          For each industrial sector, from food to beverage, from the cardboard
          and tissue industry to the pharmaceutical chemical industry, we have
          the right solutions to meet the challenges of the most demanding
          customers.
        </p>
      </div>
      <div className="media-section">
        <img src={productimage} alt="Product" className="product-image" />
        <video ref={videoRef} className="product-video" muted loop>
          <source src={productvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProductPage;
