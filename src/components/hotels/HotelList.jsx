import "./HotelList.css";
import HotelListItem from "./HotelListItem";

const DUMMY_HOTELLIST = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

function HotelList() {
  return (
    <div>
      <h1 className="hotelListTitle">Browse by property type</h1>
      <div className="hotelList">
        {DUMMY_HOTELLIST.map((item, index) => (
          <HotelListItem
            key={index}
            name={item.name}
            city={item.city}
            price={item.price}
            rate={item.rate}
            type={item.type}
            image_url={item.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelList;
