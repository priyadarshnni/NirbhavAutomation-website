import React, { useEffect, useRef } from "react";
import "./Video.css";

const Video = () => {
  const videoRef = useRef(null);

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
};

export default Video;
