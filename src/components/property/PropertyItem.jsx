import "./PropertyItem.css";

function PropertyItem(props) {
  return (
    <div className="propertyItem">
      <img src={props.image} className="pItemImg" alt="" />
      <div className="pItemTitles">
        <h1>{props.name}</h1>
        <h2>{props.count} hotels</h2>
      </div>
    </div>
  );
}

export default PropertyItem;
