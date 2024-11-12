import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Computer science",
      imageUrl: "/departments/th (4).jpg",
    },
    {
      name: "Chemical science",
      imageUrl: "/departments/th (5).jpg",
    },
    {
      name: "Buisness analytics",
      imageUrl: "/departments/th (6).jpg",
    },
    {
      name: "Machine learning",
      imageUrl: "/departments/th (7).jpg",
    },
    {
      name: "Design technology",
      imageUrl: "/departments/th (8).jpg",
    },
    {
      name: "Biomedical",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Mechatroncis",
      imageUrl: "/departments/mec.jpg",
    },
    {
      name: "Financial Mathematics",
      imageUrl: "/departments/th (9).jpg",
    },
    {
      name: "Robotics",
      imageUrl: "/departments/th (10).jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;