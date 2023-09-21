import "./SearchListItem.css";

const checkBtnHandler = () => {
  window.location.replace("/detail");
};

function SearchListItem(props) {
  return (
    <div className="searchListItem">
      <img src={props.image_url} alt="" className="sliImg" />
      <div className="sliDescription">
        <h1 className="sliTitle">{props.name}</h1>
        <span className="sliDistance">{props.distance} from center</span>
        <span className="sliTag">{props.tag}</span>
        <span className="sliDesc">{props.description}</span>
        <span className="sliType">{props.type}</span>
        <span className="sliCancel">
          {props.free_cancel ? "Free cancellation" : ""}
        </span>
        <span className="sliCancelOp">
          {props.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </span>
      </div>
      <div className="sliDetails">
        <div className="sliRating">
          <span>{props.rate_text}</span>
          <button>{props.rate}</button>
        </div>
        <div className="sliDetail">
          <span className="sliPrice">${props.price}</span>
          <span className="sliTax">Includes taxes and fees</span>
          <button onClick={checkBtnHandler} className="sliCheckBtn">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;
