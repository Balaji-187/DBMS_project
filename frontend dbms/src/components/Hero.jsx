import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <img src={imageUrl} class = "homie" alt="hero"/>
          <span>
            <img src="/Vector.png" alt="vector" />
            efef
          </span>
          
        </div>
      </div>
    </>
  );
};

export default Hero;