import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, ClickEvent }) => {
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
    <div
      onClick={ClickEvent}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0%" : "-100%"}`,
      }}
      className="SideBarContainer"
    >
      <ul>
        {navigations.map((item, i) => {
          return (
            <li className="fw600 text-white pointer" key={i}>
              <NavLink exact activeClassName="active" to={item.link}>
                {item.text}
              </NavLink>
            </li>
          );
        })}

        <div className="header_btns d-flex flex-column py-1 gap-3">
          <button className="py-2 px-2 bg_color1 rounded-3 text-white border-0">
            <Link to="/dealer" className="text-white text-decoration-none">
              Earn as Dealer
            </Link>
          </button>
          <button className="border-0 rounded-3 py-2 px-2">
            Connect wallet
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
