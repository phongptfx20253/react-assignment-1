import "./Footer.css";
import FooterItem from "./FooterItem";

const DUMMY_FOOTER = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="footerList">
          {DUMMY_FOOTER.map((item, index) => (
            <FooterItem
              key={index}
              col_number={item.col_number}
              col_values={item.col_values}
            />
          ))}
        </ul>
      </div>
      <div className="footerCopyright">
        Copyright © 2023 by PhongPTFX20253@funix.edu.vn | All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
