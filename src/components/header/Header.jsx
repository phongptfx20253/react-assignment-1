import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

/* https://www.npmjs.com/package/date-fns
+ Sử dụng format trong date-fns để định dạng lại ngày tháng theo MM/dd/yyyy dễ dàng hơn */

function Header() {
  /* Khai báo các biến trạng thái 
    + Khai báo trạng trái cho lịch, giá trị ban đầu là false.
    */

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Khi người dùng click vào nút Search sẽ chuyển sang trang Search
  const searchButtonClickHandler = () => {
    window.location.replace("/search");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <i className="fa fa-bed headerIcon" />
            <input
              type="text"
              className="headerSearchInput"
              placeholder="Where are you going?"
            />
          </div>

          <div className="headerSearchItem">
            <i className="fa fa-calendar headerIcon" />
            {/* + Khi người dùng click vào ngày tháng sẽ set ngược lại trạng thái, false => true và ngược lại để hiển thị chọn ngày tháng.
            + sử dụng format trong date-fns để dịnh dạng lại ngày tháng theo cú pháp MM/dd/yyyy.
             */}
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={date}
                direction="horizontal"
                className="date"
              />
            )}
            ;
          </div>

          <div className="headerSearchItem">
            <i className="fa fa-female headerIcon" />
            <span className="headerSearchText">
              <input
                type="text"
                className="headerSearchInputOption"
                placeholder="1"
              />
              {"adult "}
              <input
                type="text"
                className="headerSearchInputOption"
                placeholder="0"
              />
              {"children "}
              <input
                type="text"
                className="headerSearchInputOption"
                placeholder="1"
              />
              {"room"}
            </span>
          </div>

          <div className="headerSearchItem">
            {/* Khi người dùng click vào button search sẽ chuyển sang trang Search */}
            <button
              onClick={searchButtonClickHandler}
              className="headerBtnSearch"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
