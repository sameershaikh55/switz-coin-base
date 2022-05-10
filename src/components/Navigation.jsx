import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = ({ ClickEvent, isOpen }) => {
  // FOR NAVBAR SCROLLING EFFECT START
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navigation_container");
    if (header !== null) {
      header.classList.toggle("sticky", window.scrollY > 10);
    }
  });
  // FOR NAVBAR SCROLLING EFFECT END

  const navigations = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Crypto Loans",
      link: "/crypto-loans",
    },
    {
      text: "Fixed Deposits",
      link: "/fixed-deposits",
    },
    {
      text: "Crypto <--> Cash",
      link: "/crypto-cash",
    },
    {
      text: "Payment Services",
      link: "/payment-services",
    },
    {
      text: "Crypto Escrow",
      link: "/crypto-escrow",
    },
  ];

  return (
    <div className="navigation_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="mb-0 d-none d-lg-flex list-unstyled">
              {navigations.map((content, i) => {
                return (
                  <NavLink
                    exact
                    activeClassName="active_navlink"
                    key={i}
                    to={content.link}
                    className="text-decoration-none text-white px-3 py-2"
                  >
                    <li>{content.text}</li>
                  </NavLink>
                );
              })}
            </ul>

            <div className="header_btns d-flex py-1 gap-2">
              <button className="px-2 bg_color1 rounded-3 text-white border-0">
                <Link className="text-white text-decoration-none" to="/dealer">
                  Earn as Dealer
                </Link>
              </button>
              <button className="px-2">Connect wallet</button>
            </div>

            <div className="d-block d-lg-none">
              {(isOpen && (
                <img
                  className="hamb_cross"
                  onClick={ClickEvent}
                  src="/assets/cross.svg"
                  alt=""
                />
              )) || (
                <img
                  className="hamb_cross"
                  onClick={ClickEvent}
                  src="/assets/hamberger.svg"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
