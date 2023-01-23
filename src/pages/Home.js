import React, { useState } from "react";
import Nav from "../components/Nav";
import PhoneReview from "../images/PhoneReview.png";
import { SiNike } from "react-icons/si";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import Footer from "../components/Footer";

import { Link, useNavigate } from "react-router-dom";

import Loading from "../components/Loading";

function Home({ sliceData, phoneData, newloading, phoneloading }) {
  const navigate = useNavigate();

  return (
    <div>
      <Nav />

      <div className="section-A">
        <div className="border-A">
          <div className="section-A-main">
            <div className="section-A-left">
              <h3 className="A-text1">
                <span style={{ color: "white" }}> Decision </span>
                <br /> Make Easy
                <SiNike className="mark" />
              </h3>
              <p className="A-para">
                {" "}
                You’ll find the final word on the latest smartphones, both
                budget and flagship review, Android and iOS, right here. you’ve
                come to the right place.
              </p>
              <Link to="/reviews">
                <button className="button-52">See Reviews</button>
              </Link>
            </div>
            <div className="section-A-right">
              <MdOutlineArrowBackIosNew className="arrow-front" />
              <MdOutlineArrowForwardIos className="arrow-back" />
              <img className="pr-image" src={PhoneReview} alt="image" />
              <div className="clippy"></div>
            </div>
          </div>
          <div className="divider">
            <div className="phone-news">
              <h3 className="news-logo">
                <span style={{ color: "white" }}> Trending </span> News
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section-B">
        <div className="border-B">
          {newloading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "356px",
                width: "auto",
              }}
            >
              <Loading />
            </div>
          ) : (
            <div className="section-B-main">
              {sliceData.map((e, index) => (
                <a href={e.link} key={index}>
                  <div className="news-div">
                    <div className="news-header">
                      <ImNewspaper className="newsicon" />
                      <h3 className="recent-news">Recent News</h3>
                    </div>
                    <h3 className="news-date">{e.datePublished}</h3>
                    <p className="news-title">{e.name.substring(0, 100)}...</p>
                    <MdOutlineArrowBackIosNew className="arrow-front-B" />
                    <MdOutlineArrowForwardIos className="arrow-back-B" />
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="divider-second">
            <div className="review-title">
              <h3 className="review-logo">
                <span style={{ color: "white" }}> Recent </span> Reviews
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section-C">
        <div className="border-C">
          {phoneloading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "556px",
                width: "auto",
              }}
            >
              <Loading />
            </div>
          ) : (
            <div className="section-C-main">
              <div className="thirddivider"></div>
              {phoneData.slice(1, 4).map((e) => (
                <div className="section-C-item" key={e._id}>
                  <div className="image-div">
                    <img
                      className="image"
                      src={`https://kind-rose-scallop.cyclic.app/Images/${e.img}`}
                      alt="image"
                    />
                  </div>
                  <MdOutlineArrowBackIosNew className="arrow-front-C" />
                  <MdOutlineArrowForwardIos className="arrow-back-C" />
                  <div className="C-text">
                    <h3 className="C-review">{e.name} Review</h3>
                    <h3 className="C-rating">PhoneBae rating - {e.rating}</h3>
                    <div className="author-date">
                      <p className="C-author">By {e.author} /</p>
                      <p className="C-postdate">upload on {e.postDate}</p>
                    </div>
                    <p className="C-tips">{e.tips}</p>{" "}
                    <button
                      className="button-53"
                      onClick={() => {
                        navigate(`phonedata/${e._id}`);
                      }}
                    >
                      Read More
                    </button>{" "}
                  </div>
                  <div className="line"></div>
                </div>
              ))}

              <div className="more-review">
                <Link to="reviews">
                  {" "}
                  <button className="button-54">More Review</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
