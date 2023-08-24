import React from "react";

function SecondComponent() {
  const shadow = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };
  const onButtonClick = () => {
    fetch("1.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "1.pdf";
        alink.click();
      });
    });
  };
  return (
    <div
      className="d-flex  p-5"
      style={{ color: "rgb(38, 33, 24)", minHeight: "60vh" }}
    >
      <h1 className="display-4 col-4 " style={shadow}>
        About Me
      </h1>
      <div>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quibusdam dolor, aperiam natus, quam provident et maiores quo
          accusamus maxime optio aut repellendus debitis, facere mollitia
          repellat deserunt obcaecati pariatur! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quas quos rerum laborum, itaque omnis
          vitae earum quisquam, soluta nulla molestias a placeat voluptatum!
          Nulla quas voluptates vero alias sapiente ea.
        </p>
        <button
          className="btn border text-light py-3 mt-5"
          style={{ backgroundColor: "rgb(38, 33, 24)" }}
          onClick={onButtonClick}
        >
          {" "}
          Download Reseume
        </button>
      </div>
    </div>
  );
}

export default SecondComponent;
