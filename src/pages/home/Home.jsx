import React from "react";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HotelList from "../../components/hotels/HotelList";
import Navbar from "../../components/navbar/Navbar";
import Property from "../../components/property/Property";
import Subscribe from "../../components/subscribe/Subscribe";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <Property />
        <HotelList />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
