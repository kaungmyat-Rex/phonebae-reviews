import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function AdminNav() {
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
            <h3 className="adminNav-text">
              Admin<span style={{ color: "white" }}>Panel</span>
            </h3>
          </div>
          <div className="social-nav">
            <Link to={"/"}>
              {" "}
              <button className="button-59">To Website</button>{" "}
            </Link>
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

export default AdminNav;
