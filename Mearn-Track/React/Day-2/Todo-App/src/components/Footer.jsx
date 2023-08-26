import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Abdelslam El-kholy. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
