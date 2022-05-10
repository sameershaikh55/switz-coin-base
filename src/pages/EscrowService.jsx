import React from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import Upload from "../components/Upload";

const EscrowService = () => {
  return (
    <Layout>
      <div className="apply_loan_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-lg-8">
                <div className="apply_loan_right_container p-4">
                  <h1 className="mb-0 text-white display-5 fw500">
                    Escrow Service
                  </h1>
                  <br />
                  <div className="row gy-4">
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Party 1"
                      >
                        Party 1
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Email Address"
                      >
                        Email Address
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Email Address"
                        id="Email Address"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Party 2"
                      >
                        Party 2
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Email Address"
                      >
                        Email Address
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Email Address"
                        id="Email Address"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Description  of Agreement"
                      >
                        Description of Agreement
                      </label>
                      <br />
                      <textarea
                        className="w-100 inp_control_textarea"
                        name=""
                        id=""
                        rows="6"
                        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      ></textarea>
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Agreement If any"
                      >
                        Agreement If any
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
                      <label className="text-white mb-1 fw600" htmlFor="Crypto">
                        Crypto
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="text-white mb-1 fw600" htmlFor="Amount">
                        Amount
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Amount"
                        id="Amount"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="text-white mb-1 fw600" htmlFor="Fee %">
                        Fee %
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Fee %"
                        id="Fee %"
                        className="inp_control"
                        value="20 Coin"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Total Pay"
                      >
                        Total Pay
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Total Pay"
                        id="Total Pay"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Now Send your Crypto to"
                      >
                        Receiver's Wallet Address
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Receiver's Wallet Address"
                        id="Receiver's Wallet Address"
                        className="inp_control"
                        value="20 Million"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Now Send your Crypto to"
                      >
                        Now Send your Crypto to
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Now Send your Crypto to"
                        id="Now Send your Crypto to"
                        className="inp_control"
                        value="#242432425"
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
                    <div className="col-12 d-flex justify-content-center align-items-center gap-3 mt-5">
                      <Checkbox />
                      <span className="fw600 text-white f18">
                        Terms & Conditions
                      </span>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
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
              </div>
              <div className="col-12 col-lg-4">
                <HowItWorks>
                  <div className="p-4 pt-0 color3 fw500">
                    <span className="color4">Step 1</span>: Fill the form,
                    furnish the terms and conditions and attach if any documents
                    for the same.
                    <br />
                    <br />
                    <span className="color4">Step 2</span>: Send the crypto to
                    our wallet and attach the transfer screenshot and complete
                    the submission.
                    <br />
                    <br />
                    <span className="color4">Step 3</span>: We will send an
                    email to the second party to accept the offer.
                    <br />
                    <br />
                    <span className="color4">Step 4</span>: As soon as we
                    receive the acceptance from 2nd party agreement is set to be
                    live.
                    <br />
                    <br />
                    <span className="color4">Step 5</span>: After completion of
                    the agreement as per the terms and conditions, we will
                    release the funds to the 2nd party.
                    <br />
                    <br />
                    <span className="color4">Step 6</span>: In case of any
                    discrepancies both the parties can approach us to settle the
                    transaction.
                    <br />
                    <br />
                    <span className="color4">Step 7</span>: In this case we will
                    investigate and decide what to done depending upon the facts
                    available.
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

export default EscrowService;
