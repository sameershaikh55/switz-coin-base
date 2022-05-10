import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container py-2">
      <div className="page_container">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none">
            <div className="d-flex justify-content-center align-items-center">
              <img className="me-2" src="/assets/logo.svg" alt="" />
              <h1 className="display-3 mb-0 text-white">Switz Coin Base</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
