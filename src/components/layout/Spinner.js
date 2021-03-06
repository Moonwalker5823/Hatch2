import React from "react";
import LoadingIcon from "./Loading_icon.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={LoadingIcon}
        alt="Loading..."
        style={{ width: "200px", margin: " 40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
