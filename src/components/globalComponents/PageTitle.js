import React from "react";
import "../../Styles/Components/PageTitle.css";

export const PageTitle = ({ header, par }) => {
  return (
    <div className="page">
      {" "}
      <h2>{header}</h2>
      <p>{par}</p>
    </div>
  );
};
