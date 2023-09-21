import "./HotelListItem.css";

function HotelListItem(props) {
  return (
    <div className="hotelListItem">
      <img src={props.image_url} className="hliImg" alt="" />
      <span className="hliName">{props.name}</span>
      <span className="hliCity">{props.city}</span>
      <span className="hliPrice">Starting from ${props.price}</span>
      <div className="hliRating">
        <button>{props.rate}</button>
        <span>{props.type}</span>
      </div>
    </div>
  );
}

export default HotelListItem;
