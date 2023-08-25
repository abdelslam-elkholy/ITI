import React from "react";
import Card from "react-bootstrap/Card";

function CardComponent({ title, color }) {
  return (
    <Card
      style={{
        width: "15rem",
        minHeight: "10rem",
        textAlign: "center",
        backgroundColor: color,
      }}
      className="d-flex justify-content-center align-items-center m-2"
    >
      <Card.Title className="text-light">{title}</Card.Title>
    </Card>
  );
}

export default CardComponent;
