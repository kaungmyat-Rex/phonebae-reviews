import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import Footer from "../components/Footer";
import SideAdminNav from "../components/SideAdminNav";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin({ phoneData }) {
  const [value, setValue] = useState(new Date());
  const [search, setSearch] = useState("");
  const [inputChecker, setInputChecker] = useState(true);
  const [slicedata, setSlicedata] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    if (search === "") {
      setInputChecker(true);
    } else {
      setInputChecker(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [search]);

  const time = value.toLocaleTimeString();
  const date = value.toLocaleDateString();

  const searchdata = phoneData.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.author.toLowerCase().includes(search.toLowerCase())
  );

  const slicing = phoneData.slice(0, slicedata);

  const toSeemore = () => {
    setSlicedata(slicedata + 3);
  };

  const deletePost = async (id) => {
    const deleteApost = await axios
      .delete(`https://phonebaereview.herokuapp.com/api/upload/${id}`)
      .then((responce) => {
        console.log("item remove sucess");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminNav />

      <div className="section-admin">
        <div className="boder-admin">
          <div className="admin-section-main">
            <SideAdminNav />
            <div className="admin-section-body">
              <div className="admin-body-up">
                <div className="admin-body-left-up">
                  <h3 className="total-title">
                    <span style={{ color: "white" }}>Total</span>Post
                  </h3>
                  <div className="div-length">
                    <h3>{phoneData.length}</h3>
                  </div>
                </div>
                <div className="admin-body-right-up">
                  <div className="dateAndtime">
                    <h3 className="time">{time}</h3>
                    <h3 className="date">{date}</h3>
                  </div>
                </div>
              </div>
              <div className="admin-body-down">
                <div className="admin-body-left">
                  <div className="admin-srh">
                    <h3 className="admin-sch-text">
                      PhoneReview{" "}
                      <span style={{ color: "white" }}> DataBase Item</span>
                    </h3>
                    <input
                      type="text"
                      className="search-input1"
                      placeholder="  Search what you wish for"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="table-container">
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Image</th>
                          <th>Phone Model</th>
                          <th>Upload Date</th>
                          <th>Upload By</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      {inputChecker
                        ? slicing.map((e, index) => (
                            <tbody key={index}>
                              <tr>
                                <td>{index}</td>

                                <td>
                                  <img
                                    src={`https://phonebaereview.herokuapp.com/Images/${e.img}`}
                                    alt=""
                                    width={50}
                                  />
                                </td>

                                <td>{e.name}</td>
                                <td>{e.postDate}</td>
                                <td>{e.author}</td>
                                <td>
                                  <button
                                    className="edit-btn"
                                    onClick={() =>
                                      navigate(`/editData/${e._id}`)
                                    }
                                  >
                                    <BiEdit className="edit-icon" />
                                  </button>{" "}
                                  <button
                                    className=" del-btn"
                                    onClick={(id) => deletePost(e._id)}
                                  >
                                    <MdDeleteOutline className="del-icon" />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          ))
                        : searchdata.map((e, index) => (
                            <tbody key={index}>
                              <tr>
                                <td>{index}</td>

                                <td>
                                  <img
                                    src={`https://phonebaereview.herokuapp.com/Images/${e.img}`}
                                    alt=""
                                    width={50}
                                  />
                                </td>

                                <td>{e.name}</td>
                                <td>{e.postDate}</td>
                                <td>{e.author}</td>
                                <td>
                                  <button
                                    className="edit-btn"
                                    onClick={() =>
                                      navigate(`/editData/${e._id}`)
                                    }
                                  >
                                    <BiEdit className="edit-icon" />
                                  </button>{" "}
                                  <button
                                    className="del-btn"
                                    onClick={(id) => deletePost(e._id)}
                                  >
                                    <MdDeleteOutline className="del-icon" />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                    </table>
                  </div>
                  <div className="admin-seemore">
                    <button className="button-70" onClick={() => toSeemore()}>
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
