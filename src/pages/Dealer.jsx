import React from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Checkbox from "../components/Checkbox";
import Password from "../components/Password";

const Dealer = () => {
  return (
    <Layout>
      <div className="apply_loan_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-md-8">
                <div className="apply_loan_right_container p-4">
                  <h1 className="mb-0 text-white display-5 fw500">
                    Be a Dealer
                  </h1>
                  <br />

                  <div className="row gy-5">
                    <div className="col-12 col-md-6">
                      <div className="row gy-4">
                        <div className="col-12 d-flex align-items-center gap-3">
                          <Checkbox />
                          <h2 className="mb-0 fw600 text-white">
                            Create Account
                          </h2>
                        </div>
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Email  ( Same as provided for FD )"
                          >
                            Email ( Same as provided for FD )
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Email  ( Same as provided for FD )"
                            id="Email  ( Same as provided for FD )"
                            className="inp_control"
                            value="test@gmail.com"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Email  ( Same as provided for FD )"
                          >
                            Password ( Alpha, Numerical and Symbol )
                          </label>
                          <br />
                          <Password />
                        </div>
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Fixed Deposit No"
                          >
                            Fixed Deposit No
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Fixed Deposit No"
                            id="Fixed Deposit No"
                            className="inp_control"
                            value="#3456634634"
                          />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                          <button className="form_submit_btn2 w-100 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row gy-4">
                        <div className="col-12 d-flex align-items-center gap-3">
                          <Checkbox />
                          <h2 className="mb-0 fw600 text-white">Login</h2>
                        </div>

                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Email"
                          >
                            Email
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Email"
                            id="Email"
                            className="inp_control"
                            value="test@gmail.com"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Password"
                          >
                            Password
                          </label>
                          <br />
                          <Password />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                          <button className="form_submit_btn2 w-100 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-5">
                      <h3 className="mb-4 text-white">
                        Activate Account by providing the OTP sent to email
                      </h3>
                      <div className="row gy-4 align-items-end">
                        <div className="col-12 col-md-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Email"
                          >
                            Enter OTP
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Email"
                            id="Email"
                            className="inp_control"
                            value="tempmail@gmail.com"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <button className="form_submit_btn2 w-100 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <HowItWorks>
                  <div className="p-4 pt-0 color3 fw500">
                    <span className="color4">Step 1</span>: Dealers need to open
                    Fixed Deposits as Collateral security for handling
                    transactions. Each Fixed Deposit will give a leverage of 5
                    times to accept Cash to Crypto / Crypto to Cash trades
                    <br />
                    <br />
                    <span className="color4">Ex</span>: If you have kept 1000
                    USD worth of Crypto Asset as Fixed Deposit. Then you will be
                    eligible to accept orders worth 5000 USD
                    <ul className="mb-0 mt-4">
                      <li>
                        You can Deposit any Crypto Asset which is accepted by
                        us.How ever the daily USD or Local Currency price of the
                        asset is caliculated for allotting the orders
                      </li>
                      <li>
                        You can increase this Transaction Limit by increasing
                        the Fixed Security Deposit
                      </li>

                      <li>
                        Dealers Fixed deposits kept till the maturity will be
                        credited with interest
                      </li>
                    </ul>
                    <br />
                    <span className="color4">Step 2</span>: Provide the Fixed
                    Deposit Number and Create the Account
                    <br />
                    <br />
                    <span className="color4">Step 3</span>: Accept the
                    transaction orders in your login area or in Email
                    <br />
                    <br />
                    <span className="color4">Step 4</span>: Provide the
                    Transaction service to Customers (Cash to Crypto or Crypto
                    to Cash)and earn 2% to 5% on each Transaction, which will be
                    updated at the time of order Accepting
                    <br />
                    <br />
                    <span className="color4">Step 5</span>: Dealers fixed
                    Deposits can be cancelled anytime ,however they will not be
                    eligible to do Customer Transactions and claim interest
                    accrued
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

export default Dealer;
