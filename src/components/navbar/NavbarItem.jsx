import "./NavbarItem.css";

/* Khai báo component NavbarItem nhận props và trả về JSX render giao diện cho mỗi phần tử Navbar.
  Sử dụng toán tử 3 ngôi để xác định class active */

const NavbarItem = (props) => {
  return (
    <a className={props.active ? "active" : ""} href="#">
      <i className={`fa ${props.icon}`}></i>
      {props.type}
    </a>
  );
};

export default NavbarItem;
