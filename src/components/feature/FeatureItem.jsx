import "./FeatureItem.css";

function FeatureItem(props) {
  return (
    <div className="featureItem">
      <img src={props.image} className="featureImg" alt="" />
      <div className="featureTitles">
        <h1>{props.name}</h1>
        <h2>{props.subText}</h2>
      </div>
    </div>
  );
}

export default FeatureItem;
