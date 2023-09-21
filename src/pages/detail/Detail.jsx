import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import Hotel from "../../components/hotel/Hotel";

const Detail = () => {
  return (
    <div className="detailContainer">
      <Navbar />
      <Hotel />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Detail;
