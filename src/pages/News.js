import React, { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import Loading from "../components/Loading";

function News({ newsData, newloading }) {
  const [seemoreCount, setSeemoreCount] = useState(5);
  const slicedata = newsData.slice(1, seemoreCount);

  const toSeeMoreNews = () => {
    setSeemoreCount(seemoreCount + 5);
  };

  return (
    <div>
      <Nav />
      <div className="section-news">
        <div className="borderNews">
          {newloading ? (
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
            <div className="section-main-news">
              <div className="divider-news-logo">
                <h3 className="news-logo-title">
                  <span style={{ color: "white" }}> Trending </span> News
                </h3>
              </div>

              {slicedata.map((e, index) => (
                <div style={{ zIndex: "1" }} key={index}>
                  <div className="news-main-div">
                    <div className="news-left">
                      <img
                        className="news-image"
                        src={e.image} //{e.image.thumbnail.contentUrl}
                        alt=""
                      />
                    </div>
                    <div className="news-right">
                      <h3 className="news-datetime">{e.publishedAt}</h3>
                      <h3 className="news-title-page">{e.title}</h3>
                      <a href={e.url}>
                        {" "}
                        <button className="button-55">Read New</button>
                      </a>
                    </div>
                  </div>
                  <div className="news-page-divider"></div>
                </div>
              ))}
              <div className="more-news">
                <button onClick={() => toSeeMoreNews()} className="button-56">
                  More News
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

export default News;
