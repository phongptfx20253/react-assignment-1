import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <h1 className="subsTitle">Save time, save money!</h1>
      <span className="subsDescription">
        Sign up and we'll send the best deals to you
      </span>
      <div className="subsContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
