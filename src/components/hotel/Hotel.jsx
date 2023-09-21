import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hotel.css";

const DUMMY_HOTEL_DETAIL = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

function Hotel() {
  return (
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">{DUMMY_HOTEL_DETAIL.name}</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} className="hotelAddressIcon" />
          <span>{DUMMY_HOTEL_DETAIL.address}</span>
        </div>
        <span className="hotelDistance">{DUMMY_HOTEL_DETAIL.distance}</span>
        <span className="hotelPrice">{DUMMY_HOTEL_DETAIL.price}</span>
        <div className="hotelImages">
          {DUMMY_HOTEL_DETAIL.photos.map((photo, index) => (
            <div key={index} className="hotelImgWrapper">
              <img
                src={photo}
                className="hotelImg"
                alt={DUMMY_HOTEL_DETAIL.name}
              />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDescriptions">
            <h1 className="hotelDescTitle">{DUMMY_HOTEL_DETAIL.title}</h1>
            <p className="hotelDesc">{DUMMY_HOTEL_DETAIL.description}</p>
          </div>
          <div className="hotelPriceDetail">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <strong>${DUMMY_HOTEL_DETAIL.nine_night_price}</strong> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
