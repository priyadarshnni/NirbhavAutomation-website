import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT NIRBHAV AUTOMATION</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Nirbhav Automation envisions becoming a global leader in providing
          intelligent packaging machines and sustainable automation solutions to
          hazardous industries.</p>
          <p> We specialize in developing high-tech smart
          machines that enhance safety and productivity, reduce labor exposure
          to toxic environments, and minimize environmental impact.
        </p>
       
        
      </div>
    </div>
  );
};

export default About;
