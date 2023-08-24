import React from "react";

function FirstComponent() {
  const containerStyle = {
    backgroundImage:
      "url(https://shotkit.com/wp-content/uploads/2021/04/shotkit-dark-photography-FEATURE.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
  };

  return (
    <div style={containerStyle} className="d-flex align-items-center ">
      <div className="d-flex flex-column w-50 align-items-center">
        <h1 className="text-white">
          <strong> Kattie Reed</strong>
        </h1>
        <h2 className="text-white">Web Devoper & Designer</h2>
        <button className="btn text-light border mt-5 px-4">contactMe</button>
      </div>
    </div>
  );
}

export default FirstComponent;
