import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
function Reviews({ phoneData, phoneloading }) {
  const [seemoreCount, setSeemoreCount] = useState(3);
  const [inputText, setInputText] = useState("");
  const [inputChecker, setInputChecker] = useState(true);
  const [arrayChecker, setArrayChecker] = useState(true);
  const slicedata = phoneData.slice(0, seemoreCount);
  const navigate = useNavigate();
  const ToseemoreReview = () => {
    setSeemoreCount(seemoreCount + 3);
  };

  useEffect(() => {
    if (inputText === "") {
      setInputChecker(true);
    } else {
      setInputChecker(false);
    }
  }, [inputText]);

  return (
    <div>
      <Nav />
      <div className="section-C">
        <div className="border-C">
          {phoneloading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "auto",
              }}
            >
              <Loading />
            </div>
          ) : (
            <div className="section-C-main">
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="   Search what you wish for"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button className="search-btn">Search</button>
              </div>
              <div className="review-page-divider">
                <h3 className="review-page-logo-text">
                  <span style={{ color: "white" }}>Review </span>
                  List
                </h3>
              </div>
              {inputChecker
                ? slicedata.map((e) => (
                    <div className="section-C-item" key={e._id}>
                      <div className="image-div">
                        <img
                          className="image"
                          src={`https://phonebaereview.herokuapp.com/Images/${e.img}`}
                          alt="image"
                        />
                      </div>
                      <MdOutlineArrowBackIosNew className="arrow-front-C" />
                      <MdOutlineArrowForwardIos className="arrow-back-C" />
                      <div className="C-text">
                        <h3 className="C-review">{e.name} Review</h3>
                        <h3 className="C-rating">
                          PhoneBae rating - {e.rating}
                        </h3>
                        <div className="author-date">
                          <p className="C-author">By {e.author} /</p>
                          <p className="C-postdate">upload on {e.postDate}</p>
                        </div>
                        <p className="C-tips">{e.tips}</p>
                        <button
                          className="button-53"
                          onClick={() => {
                            navigate(`/${e._id}`);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                      <div className="line"></div>
                    </div>
                  ))
                : phoneData
                    .filter((e) => {
                      if (
                        e.name.toLowerCase().includes(inputText.toLowerCase())
                      ) {
                        return e;
                      }
                    })
                    .map((e) => (
                      <div className="section-C-item" key={e._id}>
                        <div className="image-div">
                          <img
                            className="image"
                            src={`https://phonebaereview.herokuapp.com/Images/${e.img}`}
                            alt="image"
                          />
                        </div>
                        <MdOutlineArrowBackIosNew className="arrow-front-C" />
                        <MdOutlineArrowForwardIos className="arrow-back-C" />
                        <div className="C-text">
                          <h3 className="C-review">{e.name} Review</h3>
                          <h3 className="C-rating">
                            PhoneBae rating - {e.rating}
                          </h3>
                          <div className="author-date">
                            <p className="C-author">By {e.author} /</p>
                            <p className="C-postdate">upload on {e.postDate}</p>
                          </div>
                          <p className="C-tips">{e.tips}</p>
                          <button
                            className="button-53"
                            onClick={() => {
                              navigate(`/${e._id}`);
                            }}
                          >
                            Read More
                          </button>
                        </div>
                        <div className="line"></div>
                      </div>
                    ))}
              <div className="more-review">
                <button onClick={() => ToseemoreReview()} className="button-54">
                  More Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Reviews;
