import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Your company description goes here.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <address>
              <p>Email: contact@example.com</p>
              <p>Phone: +123456789</p>
            </address>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Abdelslam Elkholy</p>
      </div>
    </footer>
  );
}

export default Footer;
