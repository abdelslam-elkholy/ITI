import React from "react";
import ProgressComponent from "./ProgressComponent";

function ThirdComponent() {
  return (
    <div
      style={{ backgroundColor: "rgb(68, 66, 62)", minHeight: "100vh" }}
      className="d-flex  flex-column text-light align-items-center p-5"
    >
      <h1 className="m-5">Skills</h1>
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste,
        impedit dolor magni nesciunt aspernatur, ab dolorem dignissimos sit
        veritatis dolorum doloribus eos ex atque rem tempora nam possimus
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        ipsum omnis dignissimos magnam aspernatur fugit nulla, quo voluptates
        non, atque cum. Corrupti optio doloribus dolorem accusamus vel minima
        facere voluptate?
      </p>
      <div className="d-flex justify-content-around col-12">
        <div className="d-flex flex-column text-light">
          <h3>My Focus</h3>
          <br />
          <span className="m-3">Ui/Ux Design</span>
          <span className="m-3">Front-End</span>
          <span className="m-3">Problem Solving</span>
          <span className="m-3">Backend</span>
        </div>
        <div className="col-6 ">
          <ProgressComponent name="HTML" precentage="70" />
          <ProgressComponent name="Css" precentage="65" />
          <ProgressComponent name="React" precentage="80" />
          <ProgressComponent name="Node" precentage="85" />
          <ProgressComponent name="Angular" precentage="60" />
          <ProgressComponent name="Bootstrap" precentage="60" />
          <ProgressComponent name="Tailwind" precentage="40" />
          <ProgressComponent name="Algorithms" precentage="70" />
        </div>
      </div>
    </div>
  );
}

export default ThirdComponent;
