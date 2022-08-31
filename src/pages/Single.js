import React, { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";

import axios from "axios";
import Footer from "../components/Footer";

import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Single() {
  const [getData, setGetData] = useState([]);
  const [singleloading, setSingleloading] = useState(true);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://phonebaereview.herokuapp.com/api/upload/${id}`)
      .then((response) => {
        setSingleloading(false);
        setGetData([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="section-single">
        {singleloading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "500px",
              width: "auto",
            }}
          >
            <Loading />
          </div>
        ) : (
          <div className="border-single">
            {getData.map((e) => (
              <div className="section-single-main" key={e._id}>
                <div className="divider-single">
                  <h3 className="divider-title">
                    Phone <span style={{ color: "white" }}>Review</span>
                  </h3>
                </div>
                <div className="single-body">
                  <div className="single-img">
                    <img
                      className="single-img-image"
                      src={`https://phonebaereview.herokuapp.com/Images/${e.img}`}
                      alt=""
                    />
                  </div>
                  <div className="single-divider-line"></div>
                  <div className="single-infoList">
                    <div className="ratingAndName">
                      <div className="single-rating">
                        <h3 className="single-rating-text">{e.rating}</h3>
                      </div>
                      <h3 className="single-names-text">{e.name} Review</h3>
                    </div>
                    <div className="TipsAndInfo">
                      <p className="single-date-text">Upload on {e.postDate}</p>
                      <p className="single-author">By {e.author}</p>
                      <p className="single-tips">{e.tips}</p>
                      <button className="button-57">
                        {e.price}$ from Amazon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-info-main">
                  <div className="single-info-boder">
                    <p className="single-info-text">{e.info}</p>
                    <div className="stuff">
                      <div className="goodstuff">
                        <div className="goodstuff-logo">
                          <h3 className="good-text">
                            Good <span style={{ color: "white" }}>Stuff</span>
                          </h3>
                        </div>
                        <p className="goodstuff-text">{e.goodstuff}</p>
                      </div>
                      <div className="badstuff">
                        <div className="badstuff-logo">
                          <h3 className="bad-text">
                            Bad <span style={{ color: "white" }}>Stuff</span>
                          </h3>
                        </div>
                        <p className="badstuff-text">{e.badstuff}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Single;
