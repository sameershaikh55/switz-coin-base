import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="d-flex justify-content-center gap-3">
            <div className="mb-3">
              <FaFacebook fontSize={35} />
            </div>
            <div className="">
              <FaInstagram fontSize={35} />
            </div>
            <div className="">
              <FaTwitter fontSize={35} />
            </div>
            <div className="">
              <FaLinkedin fontSize={35} />
            </div>
          </div>

          <p className="text-center mb-0">2022 / all the rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
