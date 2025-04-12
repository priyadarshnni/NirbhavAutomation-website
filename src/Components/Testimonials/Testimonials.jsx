import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.jpg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>BHAVESH NARAYANI</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
              <p>
                IIT Madars Alum w/ 7+ years of experience as Co-founder and
                Product Head in deep tech startups 5+ patents, GGF USA Winner
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>NITIKA DODEJA</h3>
                  <span>Co-founder</span>
                </div>
              </div>
              <p>FMS Alum w/ 7+ Yrs of sales Strategy & Business Growth</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>GLADWIN JES</h3>
                  <span>Product Design Engineer</span>
                </div>
              </div>
              <p>
                Certified professional with 4+ years experience in product
                design, development, & validation
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Shanmugamani V</h3>
                  <span>Product Design Engineer</span>
                </div>
              </div>
              <p>2+ years of experience in product conceptualization, calculations, drawings, & drafting</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
