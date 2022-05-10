import React, { useState } from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import Upload from "../components/Upload";

const ApplyLoan = () => {
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
                    Apply Loan
                  </h1>
                  <br />
                  <div className="row gy-4">
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Loan Coin / Currency"
                      >
                        Loan Coin / Currency
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
                        Loan Amount
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
                        Collateral Coin
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Collateral Required"
                      >
                        Collateral Required
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Collateral Required"
                        id="Collateral Required"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Loan Period"
                      >
                        Loan Period
                      </label>
                      <Select
                        activeOption="3 Months"
                        options={["3 Months", "3 Months", "3 Months"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Interest % APY"
                      >
                        Interest % APY
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Interest % APY"
                        id="Interest % APY"
                        className="inp_control"
                        value="$ 4342344"
                      />
                    </div>
                    <div className="col-12 col-md-6 align-self-start d-flex align-items-center gap-3">
                      <Checkbox />
                      <span className="fw600 text-white f18">
                        Terms & Conditions
                      </span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column">
                      <label className="text-white mb-1 fw600" htmlFor="Coin">
                        Coin
                      </label>
                      <div className="to_be_paid d-flex">
                        <button>Total</button>
                        <input
                          type="text"
                          name="Coin"
                          id="Coin"
                          className="inp_control"
                          value="20 Coin"
                        />
                      </div>
                      <p className="text-end mt-3 text-white mb-0 fw600">
                        Total to be Paid back
                      </p>
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                      <button
                        onClick={() => setAddContent(true)}
                        className="form_submit_btn text-white"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  {addContent && (
                    <div className="mt-5">
                      <div className="row gy-4">
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Email Address(Please Enter Carefully)"
                          >
                            Email Address(Please Enter Carefully
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Email Address(Please Enter Carefully)"
                            id="Email Address(Please Enter Carefully)"
                            className="inp_control"
                            value="example@example.com"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Send Collateral Coin to"
                          >
                            Send Collateral Coin to
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Send Collateral Coin to"
                            id="Send Collateral Coin to"
                            className="inp_control"
                            value="#54654654754754754"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Screen shot of Transfer"
                          >
                            Screen shot of Transfer
                          </label>
                          <br />
                          <Upload>
                            <div className="d-none d-md-block">
                              Drag & Drop your Files Here
                            </div>
                            <div className="d-block d-md-none">Attach</div>
                          </Upload>
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Loan Receiving Address"
                          >
                            Loan Receiving Address
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Loan Receiving Address"
                            id="Loan Receiving Address"
                            className="inp_control"
                            value="#242432425"
                          />
                        </div>
                        <div className="col-12 d-flex align-items-center gap-3">
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
                    choose the loan period to see the total amount to be paid
                    back at the time of closing the loan and send the collateral
                    coins to the crypto wallet mentioned. And attach the
                    screenshot of the same and complete the submission.
                    <br />
                    <br />
                    <span className="color4">Step 2</span>: Within 12-24 hours
                    the loan coin will be transferred to your wallet mentioned.
                    <br />
                    <br />
                    <span className="color4">Step 3</span>: Pre-payments can be
                    done and pre-closure are allowed as per the terms and
                    conditions.
                    <br />
                    <br />
                    <span className="color4">Step 4</span>: After closing the
                    loan your collateral crypto coins will be transferred to
                    your wallet address which will be reconfirmed by an email
                    before transferring to your wallet.
                    <br />
                    <br />
                    <div className="text-danger">
                      Please note :As it is a high Leveraged Loan , Please make
                      sure your Collateral asset never drops 110% of Loan value
                      including interest in occurred till date.If the asset
                      value goes below it, we may take a call to sell the asset
                      and close the Loan account automatically and if any
                      balance left will be deposited back to your wallet
                    </div>
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

export default ApplyLoan;
