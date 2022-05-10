import React, { useState } from "react";

const HowItWorks = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="how_it_works">
      <div className="d-flex justify-content-between align-items-center p-4">
        <h4 className="mb-0 color3">How it Works?</h4>

        {(isOpen && (
          <svg
            className="pointer color3"
            onClick={() => setIsOpen(false)}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          </svg>
        )) || (
          <svg
            className="pointer color3"
            onClick={() => setIsOpen(true)}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
          </svg>
        )}
      </div>

      {(isOpen && children) || ""}
    </div>
  );
};

export default HowItWorks;
