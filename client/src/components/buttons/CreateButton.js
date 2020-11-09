import React from "react";
import Plus from "../buttons/Plus.svg";
const CreateButton = () => {
  return (
    <div
      style={{
        width: "120px",
        backgroundColor: "#ffbd69",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <h1 style={{ color: "#202040", paddingRight: "20px" }}>Create</h1>
      <div className="imageContainer" style={{ width: "17px", height: "17px" }}>
        <img src={Plus} alt="plus" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
};

export default CreateButton;
