import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import SideAdminNav from "../components/SideAdminNav";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
function EditData({ phoneData }) {
  const [editname, setEditName] = useState("");
  const [editrating, setEditRating] = useState("");
  const [edittips, setEditTips] = useState("");
  const [editinfor, setEditInfor] = useState("");
  const [editprice, setEditPrice] = useState("");
  const [editauthor, setEditAuthor] = useState("");
  const [editgoodstuff, setEditGoodstuff] = useState("");
  const [editbadstuff, setEditBadstuff] = useState("");
  const [image, setImage] = useState("");
  const [getdata, setGetdata] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // axios
    //   .get(`https://phonebaereview.herokuapp.com/api/upload/${id}`)
    //   .then((responce) => {
    //     setGetdata([responce.data]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const testgetdata = phoneData.filter((e) => e._id === id);
    const name = testgetdata.map((e) => {
      return e.name;
    });
    const rating = testgetdata.map((e) => {
      return e.rating;
    });
    const tips = testgetdata.map((e) => {
      return e.tips;
    });
    const info = testgetdata.map((e) => {
      return e.info;
    });
    const price = testgetdata.map((e) => {
      return e.price;
    });
    const author = testgetdata.map((e) => {
      return e.author;
    });
    const goodstuff = testgetdata.map((e) => {
      return e.goodstuff;
    });
    const badstuff = testgetdata.map((e) => {
      return e.badstuff;
    });

    setEditName(name[0]);
    setEditRating(rating[0]);
    setEditTips(tips[0]);
    setEditInfor(info[0]);
    setEditPrice(price[0]);
    setEditAuthor(author[0]);
    setEditGoodstuff(goodstuff[0]);
    setEditBadstuff(badstuff[0]);
  }, []);

  // useEffect(() => {
  //   setEditName(getdata.map((e) => e.name));
  //   setEditRating(getdata.map((e) => e.rating));
  //   setEditTips(getdata.map((e) => e.tips));
  //   setEditInfor(getdata.map((e) => e.info));
  //   setEditPrice(getdata.map((e) => e.price));
  //   setEditAuthor(getdata.map((e) => e.author));
  //   setEditGoodstuff(getdata.map((e) => e.goodstuff));
  //   setEditBadstuff(getdata.map((e) => e.badstuff));
  // }, [getdata]);

  const editingData = () => {
    const formData = new FormData();
    formData.append("name", editname);
    formData.append("rating", editrating);
    formData.append("tips", edittips);
    formData.append("info", editinfor);
    formData.append("price", editprice);
    formData.append("author", editauthor);
    formData.append("goodstuff", editgoodstuff);
    formData.append("badstuff", editbadstuff);

    axios
      .patch(`https://phonebaereview.herokuapp.com/api/upload/${id}`, {
        name: editname,
        rating: editrating,
        tips: edittips,
        info: editinfor,
        price: editprice,
        author: editauthor,
        goodstuff: editgoodstuff,
        badstuff: editbadstuff,
      })
      .then((responce) => {
        console.log(responce.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {" "}
      <AdminNav />
      <div className="section-admin">
        <div className="boder-admin">
          <div className="admin-section-main">
            <SideAdminNav />
            <div className="admin-section-body">
              <div className="admin-add-section">
                <div className="input-section">
                  <h3>Phone Model</h3>

                  <input
                    type="text"
                    placeholder="Enter your Phone name"
                    value={editname}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <h3>Your Rating</h3>
                  <input
                    type="text"
                    placeholder="Enter your Rating"
                    value={editrating}
                    onChange={(e) => setEditRating(e.target.value)}
                  />
                  <h3>Tips for the phone</h3>
                  <input
                    type="text"
                    placeholder="Enter your Tips"
                    value={edittips}
                    onChange={(e) => setEditTips(e.target.value)}
                  />
                  <h3>Full infos reviews</h3>
                  <textarea
                    className="input-infor"
                    type="text"
                    placeholder="Enter your Full reviews"
                    value={editinfor}
                    onChange={(e) => setEditInfor(e.target.value)}
                  />
                  <h3>Phone Prices</h3>
                  <input
                    type="text"
                    placeholder="Enter your Prices"
                    value={editprice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                  <h3>Author of the Post</h3>
                  <input
                    type="text"
                    placeholder="Enter Author name"
                    value={editauthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                  />
                  <h3>Good stuff of the Phone</h3>
                  <input
                    type="text"
                    placeholder="Enter Good stuff"
                    value={editgoodstuff}
                    onChange={(e) => setEditGoodstuff(e.target.value)}
                  />
                  <h3>Bad Stuff of the Phone</h3>
                  <input
                    type="text"
                    placeholder="Enter Bad stuff"
                    value={editbadstuff}
                    onChange={(e) => setEditBadstuff(e.target.value)}
                  />
                </div>

                <button className="button-121" onClick={() => editingData()}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditData;
