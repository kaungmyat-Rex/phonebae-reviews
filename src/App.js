import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
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
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  const [newloading, setNewLoading] = useState(true);
  const [phoneloading, setPhoneLoading] = useState(true);

  /****** Context api useState hook */
  // const [nameContext, setNameContext] = useState("");
  // const [ratingContext, setRatingContext] = useState();
  // const [tipsContext, setTipsContext] = useState("");
  // const [inforContext, setInforContext] = useState("");
  // const [priceContext, setPriceContext] = useState();
  // const [authorContext, setAuthorContext] = useState("");
  // const [goodstuffContext, setGoodstuffContext] = useState("");
  // const [badstuffContext, setBadstuffContext] = useState("");
  // const [imgContext, setImgContext] = useState("");

  useEffect(() => {
    /******* news data api of third party from hacker api */
    const options = {
      method: "GET",
      url: `https://tech-news3.p.rapidapi.com/venturebeat`,
      headers: {
        "x-rapidapi-host": "tech-news3.p.rapidapi.com",
        "x-rapidapi-key": "51fa1f2a40mshe0b6b6e99611d99p1c6332jsn9b7eda1a2bc7",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewLoading(false);
        setNewsData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    /******* get request Phone Data api */
    axios
      .get("https://phonebaereview.herokuapp.com/api/upload")
      .then((response) => {
        setPhoneLoading(false);
        setPhoneData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliceData = newsData.slice(1, 4);

  // const sendingdata = () => {
  //   const formData = new FormData();
  //   formData.append("name", text);
  //   formData.append("rating", image);
  //   formData.append("tips", text);
  //   formData.append("infor", image);
  //   formData.append("price", text);
  //   formData.append("author", image);
  //   formData.append("goodstuff", text);
  //   formData.append("badstuff", image);
  //   formData.append("image", text);

  //   /******* post data request to server api*/
  //   axios
  //     .post("http://localhost:8000/api/upload", formData)
  //     .then((res) => {
  //       alert("File Upload success");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // };

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
