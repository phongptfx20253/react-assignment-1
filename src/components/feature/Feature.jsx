import React from "react";
import "./Feature.css";
import FeatureItem from "./FeatureItem";

const DUMMY_CITY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

function Feature() {
  return (
    <div className="feature">
      {DUMMY_CITY.map((item, index) => (
        <FeatureItem
          key={index}
          name={item.name}
          subText={item.subText}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Feature;
