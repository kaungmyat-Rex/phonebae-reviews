import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Single from "./pages/Single";
import PageNotFd from "./pages/PageNotFd";
import Admin from "./pages/Admin";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  const [newloading, setNewLoading] = useState(true);
  const [phoneloading, setPhoneLoading] = useState(true);

  useEffect(() => {
    /******* news data api of third party from hacker api */
    const options = {
      method: "GET",
      url: "https://news-api14.p.rapidapi.com/top-headlines",
      params: {
        country: "us",
        language: "en",
        pageSize: "10",
        category: "techs",
      },
      headers: {
        "X-RapidAPI-Key": "51fa1f2a40mshe0b6b6e99611d99p1c6332jsn9b7eda1a2bc7",
        "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewLoading(false);
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });

    /******* get request Phone Data api */
    axios
      .get("https://kind-rose-scallop.cyclic.app/getreviews")
      .then((response) => {
        setPhoneLoading(false);
        setPhoneData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliceData = newsData.slice(1, 4);
  console.log(newsData);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sliceData={sliceData}
                phoneData={phoneData}
                newloading={newloading}
                phoneloading={phoneloading}
              />
            }
          ></Route>
          <Route
            path="news"
            element={<News newsData={newsData} newloading={newloading} />}
          ></Route>
          <Route
            path="reviews"
            element={
              <Reviews phoneData={phoneData} phoneloading={phoneloading} />
            }
          ></Route>
          <Route path="phonedata/:id" element={<Single />} />
          <Route path=":id" element={<Single />} />
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<PageNotFd />}></Route>
          <Route
            path="BigBoss/superadmin"
            element={<Admin phoneData={phoneData} />}
          ></Route>
          <Route
            path="BigBoss/superadmin/addData"
            element={<AddData />}
          ></Route>
          <Route
            path="editData/:id"
            element={<EditData phoneData={phoneData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
