import "./FooterItem.css";

function FooterItem(props) {
  return (
    <div className="footerItem">
      {props.col_values.map((value, index) => (
        <li key={index} className="liItem">
          {value}
        </li>
      ))}
    </div>
  );
}

export default FooterItem;
