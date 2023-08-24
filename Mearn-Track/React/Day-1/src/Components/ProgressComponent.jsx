import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressComponent({ name, precentage }) {
  return (
    <div className="w-100">
      <span>{name}</span>
      <ProgressBar variant="info" now={precentage} />
    </div>
  );
}

export default ProgressComponent;
