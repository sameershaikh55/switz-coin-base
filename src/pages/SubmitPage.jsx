import React from "react";
import Layout from "../layout";

const SubmitPage = () => {
  return (
    <Layout>
      <div className="thankyou_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="thankyou_container_inner">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-11 col-sm-10 col-lg-6 mx-auto">
                      <img className="w-100" src="assets/thankyou.svg" alt="" />
                    </div>
                  </div>
                  <div className="text-center px-2 px-md-4">
                    <h1 className="display-6 fw800">
                      Thank you for Transacting with us.You will receive an
                      Email shortly, With Transaction Details and other
                      Necessary Information
                    </h1>
                    <div className="row">
                      <h2 className="col-10 mx-auto text-danger f28 fw600">
                        Please Note: In some cases, Email may be delayed for 6
                        to 12 hours depending on the type of transaction and
                        other Confirmations.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitPage;
