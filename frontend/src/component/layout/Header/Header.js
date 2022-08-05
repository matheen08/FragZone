import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../Images/Fragzone-logo-1.png";
// import { FaUserAlt } from "react-icons/fa";
import { MdAccountCircle, MdSearch, MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColor: "#75706b",
  burgerColorHover: "#eb4034", //"#eb4034"
  logo,
  logoWidth: "17vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",

  //   ProfileIconElement:{FaUserAlt}
};

const Header = () => {
  return (
    <ReactNavbar
      {...options}
      profileIcon={true}
      cartIcon={true}
      searchIcon={true}
      ProfileIconElement={MdAccountCircle}
      CartIconElement={MdAddShoppingCart}
      SearchIconElement={MdSearch}
    />
  );
};

export default Header;
