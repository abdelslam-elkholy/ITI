/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ children }) => {
  return (
    <div className="d-flex flex-column bg-info text-light p-5">
      <h1 className="fw-fw-bolder ">To Do App</h1>
      <p>Add todo</p>
      {children}
    </div>
  );
};

export default Header;
