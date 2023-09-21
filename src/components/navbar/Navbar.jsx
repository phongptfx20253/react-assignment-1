// Import css và các component cần thiết
import "./Navbar.css";
import NavbarItem from "./NavbarItem";

// Tạo dữ liệu mẫu DUMMY_NAVBAR
const DUMMY_NAVBAR = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

/* Khai báo commponent Navbar nhận props và trả về JSX render giao diện theo yêu cầu */

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* Logo, nút đăng ký, đăng nhập */}
        <div className="navLogo">
          <div className="logo">
            <a href="/">Booking Website</a>
          </div>
          <div>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>

        {/* Sử dụng phương thức map để duyệt qua mỗi phần tử và render cho mỗi phần tử với component con NavbarItem*/}
        <div className="navItem">
          {DUMMY_NAVBAR.map((item, index) => (
            <NavbarItem
              key={index}
              type={item.type}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
