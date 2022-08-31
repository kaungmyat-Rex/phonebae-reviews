import React from "react";
import { GiAtomicSlashes } from "react-icons/gi";
function Loading() {
  return (
    <div>
      <div className="loading-div">
        <GiAtomicSlashes className="atomic" />
        <h3 className="loading-text">Loading</h3>
      </div>
    </div>
  );
}

export default Loading;
