import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const OnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="top_navigation">
        <Header />
        <Navigation ClickEvent={OnClick} isOpen={isOpen} />
      </div>
      <div className="under_navigation"></div>
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;
