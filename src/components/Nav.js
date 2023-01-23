import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Nav() {
  const [sideShow, setSideShow] = useState(false);

  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  const showingSide = () => {
    setSideShow(!sideShow);
  };

  return (
    <div className="main-nav">
      <div className="border-nav">
        <div className="section-nav">
          <div className="menu-nav-side">
            <HiMenuAlt1
              onClick={() => showingSide()}
              className="menu-side-icon"
            />
          </div>

          <div className="logo-nav">
            <h3 className="logo-text">
              PHONEBAE
              <MdPhoneIphone style={{ color: "white" }} />
            </h3>
          </div>
          <div className="menu-nav">
            <ul className="menu-list">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-style" : "menu-list-Navlink"
                }
              >
                {" "}
                <li>Home</li>{" "}
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "active-style" : "menu-list-Navlink"
                }
              >
                {" "}
                <li>News</li>{" "}
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? "active-style" : "menu-list-Navlink"
                }
              >
                {" "}
                <li>Reviews</li>{" "}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-style" : "menu-list-Navlink"
                }
              >
                {" "}
                <li>About</li>
              </NavLink>
            </ul>
          </div>
          <div className="social-nav">
            <ul className="social-list">
              <li>
                <FaFacebook />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillTwitterCircle />
              </li>
            </ul>
          </div>
          <div className="social-nav-side">
            <GiAtomicSlashes className="social-side-icon" />
          </div>

          <div
            className={`main-side-bar ${sideShow ? "main-side-bar-show" : ""}`}
          >
            <ul className="side-list">
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <li>
                  {" "}
                  <MdOutlineArrowBackIosNew className="nav-arrow-side-f" />
                  Home <MdOutlineArrowForwardIos className="nav-arrow-side-b" />
                </li>{" "}
              </Link>

              <Link to="/news" style={{ textDecoration: "none" }}>
                {" "}
                <li>
                  <MdOutlineArrowBackIosNew className="nav-arrow-side-f1" />
                  News
                  <MdOutlineArrowForwardIos className="nav-arrow-side-b1" />
                </li>{" "}
              </Link>
              <Link to="/reviews" style={{ textDecoration: "none" }}>
                {" "}
                <li className="nav-side-li3">
                  <MdOutlineArrowBackIosNew className="nav-arrow-side-f2" />
                  Reviews{" "}
                  <MdOutlineArrowForwardIos className="nav-arrow-side-b2" />
                </li>{" "}
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                {" "}
                <li>
                  <MdOutlineArrowBackIosNew className="nav-arrow-side-f3" />
                  About
                  <MdOutlineArrowForwardIos className="nav-arrow-side-b3" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
