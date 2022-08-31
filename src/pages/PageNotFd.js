import React from "react";
import { BiMessageAltError } from "react-icons/bi";
import { Link } from "react-router-dom";
function PageNotFd() {
  return (
    <div className="null">
      <div className="null-boder">
        <BiMessageAltError className="null-logo" />
        <h3 className="null-text">
          Information <span style={{ color: "white" }}>Missing</span>
        </h3>
        <Link to="/">
          <button className="button-58">Go Back TO Website</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFd;
