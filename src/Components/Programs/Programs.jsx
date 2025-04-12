import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_icon_1 from "../../assets/program-icon-1.jpg";
import program_icon_2 from "../../assets/program-icon-2.jpg";
import program_3 from "../../assets/program-3.jpg"; // New image
import program_4 from "../../assets/program-4.jpg"; // New image
import program_5 from "../../assets/program-5.jpg"; // New image

const Programs = () => {
  return (
    <div className="programs">
      {/* First row */}
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Automatic Wrapping Machine</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Embedded IoT Sensors</p>
        </div>
      </div>

      {/* Second row */}
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Advanced Robotics</p>
        </div>
      </div>

      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
          <p>AI-Powered Automation</p>
        </div>
      </div>

      <div className="program">
        <img src={program_5} alt="" />
        <div className="caption">
          <p>Smart Manufacturing</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
