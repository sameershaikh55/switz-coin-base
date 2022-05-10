import React, { useState } from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

const FixedDeposit = () => {
  const [addContent, setAddContent] = useState(false);

  return (
    <Layout>
      <div className="apply_loan_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-lg-8">
                <div className="apply_loan_right_container p-4">
                  <h1 className="mb-0 text-white display-5 fw500">
                    Fixed Deposits
                  </h1>
                  <br />
                  <div className="row gy-4">
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Depositing Coin"
                      >
                        Depositing Coin
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Loan Amount"
                      >
                        Quantity/Amount
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Loan Amount"
                        id="Loan Amount"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Collateral Coin"
                      >
                        Deposit Period
                      </label>
                      <Select
                        activeOption="2 Months"
                        options={["2 Months", "2 Months", "2 Months"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Collateral Required"
                      >
                        Interest % APY
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Collateral Required"
                        id="Collateral Required"
                        className="inp_control"
                        value="$ 4342344"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Email Address"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="Collateral Required"
                        id="Collateral Required"
                        className="inp_control"
                        value="test@gmail.com"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="text-white mb-1 fw600" htmlFor="Coin">
                        Coin
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Coin"
                        id="Coin"
                        className="inp_control"
                        value="20 Coin"
                      />
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                      <Checkbox />
                      <span className="fw600 text-white f18">
                        Terms & Conditions
                      </span>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                      <span className="fw600 text-white f18">
                        Recieving @Maturity
                      </span>
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                      <button
                        onClick={() => setAddContent(true)}
                        className="form_submit_btn text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  {addContent && (
                    <div className="mt-5">
                      <div className="row gy-4">
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Recieving Adress@Maturity"
                          >
                            Recieving Adress@Maturity
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Recieving Adress@Maturity"
                            id="Recieving Adress@Maturity"
                            className="inp_control"
                            value="#54654654754754754"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Send Crypto to"
                          >
                            Send Crypto to
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Send Crypto to"
                            id="Send Crypto to"
                            className="inp_control"
                            value="#242432425"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Screenshot of transfer"
                          >
                            Screenshot of transfer
                          </label>
                          <br />
                          <Upload>
                            <div className="d-none d-md-block">
                              Drag & Drop your Files Here
                            </div>
                            <div className="d-block d-md-none">Attach</div>
                          </Upload>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                          <Checkbox />
                          <span className="fw600 text-white f18">
                            Terms & Conditions
                          </span>
                        </div>
                        <div className="col-12 mt-5 d-flex justify-content-center">
                          <Link
                            className="form_submit_btn_up"
                            to="/submit-thankyou"
                          >
                            <button className="form_submit_btn text-white">
                              Submit
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <HowItWorks>
                  <div className="p-4 pt-0 color3 fw500">
                    <span className="color4">Step 1</span>: Fill the form and
                    find your interest percentage along with maturity received
                    at the end of deposit period.
                    <br />
                    <br />
                    <span className="color4">Step 2</span>: Enter receiving
                    address to receive the deposit at the time of maturity.
                    However this can be changed in future by sending us an email
                    request.
                    <br />
                    <br />
                    <span className="color4">Step 3</span>: Send the fixed
                    deposit crypto to the address mentioned.
                    <br />
                    <br />
                    <span className="color4">Step 4</span>: Take a screenshot of
                    the transfer and attach it and complete the submission.
                    <br />
                    <br />
                    <span className="color4">Step 5</span>: You will be
                    receiving an email in 6 to 12 hours with the transaction
                    details and date of maturity of funds.
                    <br />
                    <br />
                    <span className="color4">Step 6</span>: All our deposits are
                    for fixed term and cannot be cancelled or term changed once
                    its submitted.
                    <br />
                    <br />
                    <span className="color4">Step 7</span>: Principle and
                    Interest will be paid at the time of settlement.
                    <br />
                    <br />
                    <span className="color4">Step 8</span>: For any queries
                    please contact us by email or through our customer support
                    channels.
                  </div>
                </HowItWorks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FixedDeposit;
