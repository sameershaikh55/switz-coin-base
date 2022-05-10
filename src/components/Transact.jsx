import React from "react";

const Transact = () => {
  return (
    <div className="transact_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="bg-white rounded-3 py-4 py-md-3">
            <h1 className="text-center mb-4 mb-md-2 fw600">We transact with</h1>
            <div className="row">
              <div className="col-8 col-md-12 mx-auto">
                <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
                  <img src="/assets/transact/i1.png" alt="" />
                  <img src="/assets/transact/i2.png" alt="" />
                  <img src="/assets/transact/i3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transact;
