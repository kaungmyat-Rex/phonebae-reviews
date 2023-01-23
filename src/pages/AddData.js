import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../components/AdminNav";
import SideAdminNav from "../components/SideAdminNav";
import Footer from "../components/Footer";
// import { storage } from "../components/firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AddData() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [tips, setTips] = useState("");
  const [infor, setInfor] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [goodstuff, setGoodstuff] = useState("");
  const [badstuff, setBadstuff] = useState("");
  const [image, setImage] = useState("");
  const [storeimage, setStoreimage] = useState(null);
  const [linkimage, setLinkimage] = useState("");

  const sendingdata = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("rating", rating);
    formData.append("tips", tips);
    formData.append("info", infor);
    formData.append("price", price);
    formData.append("author", author);
    formData.append("goodstuff", goodstuff);
    formData.append("badstuff", badstuff);
    formData.append("image", image);

    /******* post data request to server api*/
    axios
      .post("https://kind-rose-scallop.cyclic.app/upload", formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  // const testfun = async () => {
  //   const imgref = ref(storage, `storeImg/${storeimage.name + Date.now()}`);

  //   uploadBytes(imgref, storeimage).then(() => {
  //     alert("image uploaded");
  //   });
  //   await getDownloadURL(imgref).then((url) => {
  //     setLinkimage(url);
  //   });
  // };
  // console.log(linkimage);
  return (
    <div>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h3>Your Rating</h3>
                  <input
                    type="text"
                    placeholder="Enter your Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <h3>Tips for the phone</h3>
                  <input
                    type="text"
                    placeholder="Enter your Tips"
                    value={tips}
                    onChange={(e) => setTips(e.target.value)}
                  />
                  <h3>Full infos reviews</h3>
                  <textarea
                    className="input-infor"
                    type="text"
                    placeholder="Enter your Full reviews"
                    value={infor}
                    onChange={(e) => setInfor(e.target.value)}
                  />
                  <h3>Phone Prices</h3>
                  <input
                    type="text"
                    placeholder="Enter your Prices"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <h3>Author of the Post</h3>
                  <input
                    type="text"
                    placeholder="Enter Author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <h3>Good stuff of the Phone</h3>
                  <input
                    type="text"
                    placeholder="Enter Good stuff"
                    value={goodstuff}
                    onChange={(e) => setGoodstuff(e.target.value)}
                  />
                  <h3>Bad Stuff of the Phone</h3>
                  <input
                    type="text"
                    placeholder="Enter Bad stuff"
                    value={badstuff}
                    onChange={(e) => setBadstuff(e.target.value)}
                  />
                  <h3>Import Images of the phone</h3>
                  <input
                    type="file"
                    onChange={(e) => setStoreimage(e.target.files[0])}
                  />
                </div>

                <button className="button-121" onClick={() => sendingdata()}>
                  send
                </button>
                {/* <button>test submit</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddData;
