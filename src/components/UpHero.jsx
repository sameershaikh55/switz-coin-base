import React from "react";
import { Link } from "react-router-dom";

const UpHero = () => {
  return (
    <div className="up_hero_container py-4">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-8 px-0 position-relative">
              <h1 className="display-4 fw-bold text-white">
                Crypto Platform for all your needs
              </h1>
              <Link to="/dealer">
                <button className="mt-3 lets_start">Let’s Start</button>
              </Link>

              {/* <div className="d-none d-md-block trnsact_with_container">
                <h1 className="fw600 mb-2">We transact with</h1>
                <div className="d-flex justify-content-start gap-4">
                  <img src="/assets/transact/i1.png" alt="" />
                  <img src="/assets/transact/i2.png" alt="" />
                  <img src="/assets/transact/i3.png" alt="" />
                </div>
              </div> */}
            </div>
            <div className="col-12 col-md-4 px-0">
              <div className="row">
                <div className="col-8 col-lg-10 col-xl-12 mx-auto">
                  <img
                    className="w-100"
                    src="/assets/slider/i1.svg"
                    alt="Crypto Platform for all your needs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpHero;
