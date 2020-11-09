import React from "react";
import Link from "../buttons/Link.svg";
const JoinButton = () => {
  return (
    <div
      style={{
        width: "120px",
        backgroundColor: "#ffbd69",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <div className="imageContainer" style={{ width: "17px", height: "17px" }}>
        <img src={Link} alt="plus" style={{ width: "100%", height: "auto" }} />
      </div>
      <h1 style={{ color: "#202040", paddingLeft: "20px" }}>Join</h1>
    </div>
  );
};

export default JoinButton;
