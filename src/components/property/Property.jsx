import "./Property.css";
import PropertyItem from "./PropertyItem";

const DUMMY_PROPERTY = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

function Property() {
  return (
    <div>
      <h1 className="propertyTitle">Browse by property type</h1>
      <div className="property">
        {DUMMY_PROPERTY.map((item, index) => (
          <PropertyItem
            key={index}
            name={item.name}
            count={item.count}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Property;
