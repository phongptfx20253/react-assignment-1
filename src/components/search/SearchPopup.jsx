import "./SearchPopup.css";

function SearchPopup() {
  return (
    <div className="searchPopup">
      <h1 className="searchPopupTitle">Search</h1>
      <div className="searchPopupItem">
        <label>Destination</label>
        <input type="text" />
      </div>

      <div className="searchPopupItem">
        <label>Check-in Date</label>
        <input
          className="checkinDate"
          type="text"
          placeholder={`06/24/2022 to 06/24/2022`}
        />
      </div>

      <div className="searchPopupItem">
        <label>Options</label>
        <div className="spOptions">
          <div className="spOptionItem">
            <span className="spOptionText">
              Min price <small>per night</small>
            </span>
            <input type="number" className="spOptionInput" />
          </div>

          <div className="spOptionItem">
            <span className="spOptionText">
              Max price <small>per night</small>
            </span>
            <input type="number" className="spOptionInput" />
          </div>

          <div className="spOptionItem">
            <span className="spOptionText">Adult</span>
            <input
              type="number"
              min={1}
              className="spOptionInput"
              placeholder="1"
            />
          </div>

          <div className="spOptionItem">
            <span className="spOptionText">Children</span>
            <input
              type="number"
              min={0}
              className="spOptionInput"
              placeholder="0"
            />
          </div>

          <div className="spOptionItem">
            <span className="spOptionText">Room</span>
            <input
              type="number"
              min={1}
              className="spOptionInput"
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
}

export default SearchPopup;
