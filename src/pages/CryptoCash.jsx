import React, { useState } from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import Upload from "../components/Upload";

const CryptoCash = () => {
  const [addContent, setAddContent] = useState(false);
  const [addContent2, setAddContent2] = useState(false);

  return (
    <Layout>
      <div className="apply_loan_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-lg-8">
                <div className="apply_loan_right_container p-4">
                  <div className="row gx-4 gy-5">
                    <div className="col-12 col-md-6">
                      <div className="row gy-4">
                        <div className="col-12">
                          <h2 className="mb-0 display-6 text-white fw500 d-flex align-items-center gap-3">
                            <Checkbox />
                            Crypto <img src="assets/shuffle.svg" alt="" /> Cash
                          </h2>
                        </div>
                        <div className="col-12 mt-4">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Network"
                          >
                            Network
                          </label>
                          <Select
                            activeOption="20 Coin"
                            options={["20 Coin", "20 Coin", "20 Coin"]}
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Crypto"
                          >
                            Crypto
                          </label>
                          <Select
                            activeOption="20 Coin"
                            options={["20 Coin", "20 Coin", "20 Coin"]}
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Loan Amount"
                          >
                            Amount
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Loan Amount"
                            id="Loan Amount"
                            className="inp_control"
                            value="20 Coin"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Currency"
                          >
                            Currency
                          </label>
                          <Select
                            activeOption="20 Coin"
                            options={["20 Coin", "20 Coin", "20 Coin"]}
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Loan Amount"
                          >
                            Amount
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Loan Amount"
                            id="Loan Amount"
                            className="inp_control"
                            value="20 Coin"
                          />
                        </div>
                        <div className="col-12">
                          <button
                            onClick={() => setAddContent(true)}
                            className="w-100 form_submit_btn2 text-white"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row gy-4">
                        <div className="col-12">
                          <h2 className="mb-0 display-6 text-white fw500 d-flex align-items-center gap-3">
                            <Checkbox />
                            Cash <img src="assets/shuffle.svg" alt="" /> Crypto
                          </h2>
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Currency"
                          >
                            Currency
                          </label>
                          <br />
                          <Select
                            activeOption="20 Coin"
                            options={["20 Coin", "20 Coin", "20 Coin"]}
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Amount"
                          >
                            Amount
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Currency"
                            id="Currency"
                            className="inp_control"
                            value="20 Coin"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Crypto"
                          >
                            Coin
                          </label>
                          <Select
                            activeOption="20 Coin"
                            options={["20 Coin", "20 Coin", "20 Coin"]}
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Loan Amount"
                          >
                            Receive
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Loan Amount"
                            id="Loan Amount"
                            className="inp_control"
                            value="20 Coin"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            className="text-white mb-1 fw600"
                            htmlFor="Fee (USDT/USDC)"
                          >
                            Fee (USDT/USDC)
                          </label>
                          <br />
                          <input
                            type="text"
                            name="Fee (USDT/USDC)"
                            id="Fee (USDT/USDC)"
                            className="inp_control"
                            value="20 Coin"
                          />
                        </div>
                        <div className="col-12">
                          <button
                            onClick={() => setAddContent2(true)}
                            className="w-100 form_submit_btn2 text-white"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="row gx-4 gy-5">
                    <div className="col-12 col-md-6">
                      {addContent && (
                        <div className="row gy-4">
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Loan Amount"
                            >
                              Your Email
                            </label>
                            <br />
                            <input
                              type="text"
                              name="Loan Amount"
                              id="Loan Amount"
                              className="inp_control"
                              value="tempmail@gmail.com"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Recieving Country
                            </label>
                            <Select
                              activeOption="USA"
                              options={["USA", "USA", "USA"]}
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Recieving City ( Optional )
                            </label>
                            <Select
                              activeOption="California"
                              options={[
                                "California",
                                "California",
                                "California",
                              ]}
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Send Crypto to"
                            >
                              Send Crypto to
                            </label>
                            <input
                              type="text"
                              name="Loan Amount"
                              id="Loan Amount"
                              className="inp_control"
                              value="California"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Screen shot of Transfer
                            </label>
                            <Upload>
                              <div className="d-none d-md-block">
                                Drag & Drop your Files Here
                              </div>
                              <div className="d-block d-md-none">Attach</div>
                            </Upload>
                          </div>
                          <div className="col-12 d-flex align-items-center gap-3">
                            <Checkbox />
                            <span className="fw600 text-white f18">
                              Terms & Conditions
                            </span>
                          </div>
                          <div className="col-12">
                            <Link
                              className="form_submit_btn_up"
                              to="/submit-thankyou"
                            >
                              <button className="w-100 form_submit_btn2 text-white">
                                Submit
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      {addContent2 && (
                        <div className="row gy-4">
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Loan Amount"
                            >
                              Your Email
                            </label>
                            <br />
                            <input
                              type="text"
                              name="Loan Amount"
                              id="Loan Amount"
                              className="inp_control"
                              value="tempmail@gmail.com"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Recieving Country
                            </label>
                            <Select
                              activeOption="USA"
                              options={["USA", "USA", "USA"]}
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Recieving City ( Optional )
                            </label>
                            <Select
                              activeOption="California"
                              options={[
                                "California",
                                "California",
                                "California",
                              ]}
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Send USDT/USDC to
                            </label>
                            <input
                              type="text"
                              name="Loan Amount"
                              id="Loan Amount"
                              className="inp_control"
                              value="California"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="text-white mb-1 fw600"
                              htmlFor="Recieving Country"
                            >
                              Screen shot of Transfer
                            </label>
                            <Upload>
                              <div className="d-none d-md-block">
                                Drag & Drop your Files Here
                              </div>
                              <div className="d-block d-md-none">Attach</div>
                            </Upload>
                          </div>
                          <div className="col-12 d-flex align-items-center gap-3">
                            <Checkbox />
                            <span className="fw600 text-white f18">
                              Terms & Conditions
                            </span>
                          </div>
                          <div className="col-12">
                            <Link
                              className="form_submit_btn_up"
                              to="/submit-thankyou"
                            >
                              <button className="w-100 form_submit_btn2 text-white">
                                Submit
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <HowItWorks>
                  <div className="p-4 pt-0 color3 fw500">
                    <p className="color5 fw600">Crypto -&gt; Cash</p>

                    <div className="fw500">
                      <p className="mb-2">
                        <span className="color4">Step 1 :</span> Fill the form
                        and choose the receiving country to receive the cash,
                        send the crypto and attach the screen shot and continue
                        with submission.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 2 :</span> You will
                        receive an email in 6 to 12 hours with the dealers
                        information.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 3 :</span> As it is an in
                        person transaction, ask dealers ID number to confirm
                        with the details provided to in your email.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 4 :</span> Receive the
                        cash from the dealer and provide them the OTP.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 5 :</span> As soon as the
                        OTP is provided to the dealer transaction is set to be
                        completed and the crypto is released to the dealer and
                        cannot be reversed back.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 6 :</span> For any queries
                        please contact us by email or through our customer
                        support channels.
                      </p>
                    </div>

                    <p className="mt-4 color5 fw600">Crypto -&gt; Cash</p>

                    <div className="fw500">
                      <p className="mb-2">
                        <span className="color4">Step 1 :</span> Fill the form
                        and choose the country where you would like to do the
                        transaction.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 2 :</span> Please check
                        the amount of USDT or USDC need to be paid for
                        transactional fee.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 3 :</span> Transfer the
                        USDT or USDC fee to the mentioned wallet address and
                        attach the screenshot of it and go ahead with the
                        submission.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 4 :</span> You will
                        receive an email in 6 to 12 hours with the dealers
                        information.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 5 :</span> As it is an in
                        person transaction, ask dealers ID number to confirm
                        with the details provided to in your email.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 6 :</span> Provide the
                        cash to the dealer and check your crypto wallet for the
                        transfer then provide the OTP to the dealer.
                      </p>
                      <p className="mb-2">
                        <span className="color4">Step 7 :</span> As soon as the
                        OTP is provided to the dealer transaction is set to be
                        completed. All our dealers are secured by fixed crypto
                        deposits hence they are risk free and secured
                        transaction is assured.
                      </p>
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

export default CryptoCash;
