import React from "react";
import Layout from "../layout";
import HowItWorks from "../components/HowItWorks";
import Select from "../components/Select";
import Upload from "../components/Upload";
import { Link } from "react-router-dom";

const PaymentService = () => {
  return (
    <Layout>
      <div className="apply_loan_container">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-12 col-lg-8">
                <div className="apply_loan_right_container p-4">
                  <h1 className="mb-0 text-white display-5 fw500">
                    Payment Services
                  </h1>
                  <br />
                  <div className="row gy-4">
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Sender Email"
                      >
                        Sender Email
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Sender Email"
                        id="Sender Email"
                        className="inp_control"
                        value="test@gmail.com"
                      />
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-6">
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
                        value="$323"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Loan Period"
                      >
                        Crypto
                      </label>
                      <Select
                        activeOption="20 Coin"
                        options={["20 Coin", "20 Coin", "20 Coin"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="To be paid"
                      >
                        To be paid
                      </label>
                      <br />
                      <input
                        type="text"
                        name="To be paid"
                        id="To be paid"
                        className="inp_control"
                        value="#121313131"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Reciever’s Email"
                      >
                        Reciever’s Email
                      </label>
                      <br />
                      <input
                        type="text"
                        name="Reciever’s Email"
                        id="Reciever’s Email"
                        className="inp_control"
                        value="test@gmail.com"
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Payment Mode"
                      >
                        Payment Mode
                      </label>
                      <Select
                        activeOption="Normal"
                        options={["Normal", "Normal", "Normal"]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Postal Address"
                      >
                        Postal Address
                      </label>
                      <textarea
                        name=""
                        id=""
                        rows="6"
                        className="w-100 inp_control_textarea"
                        defaultValue="23, hero colony, near desporoad"
                      ></textarea>
                    </div>
                    <div className="col-12 col-md-6 align-self-end pb-2">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Postal Address"
                      >
                        Postal Address
                      </label>
                      <Upload>
                        <div className="d-none d-md-block">
                          Attach Invoice (If Any)
                        </div>
                        <div className="d-block d-md-none">
                          Attach Invoice (If Any)
                        </div>
                      </Upload>
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Send Crypto to"
                      >
                        Send Crypto to
                      </label>
                      <input
                        type="text"
                        name="Reciever’s Email"
                        id="Reciever’s Email"
                        className="inp_control"
                        value="test@gmail.com"
                      />
                    </div>
                    <div className="col-12 col-md-6 align-self-end pb-2">
                      <label
                        className="text-white mb-1 fw600"
                        htmlFor="Attach screenshot  of Transfer "
                      >
                        Attach screenshot of Transfer
                      </label>
                      <Upload>
                        <div className="d-none d-md-block">
                          Drag & Drop your Files Here
                        </div>
                        <div className="d-block d-md-none">Attach</div>
                      </Upload>
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
              </div>
              <div className="col-12 col-lg-4">
                <HowItWorks>
                  <div className="p-4 pt-0 color3 fw500">
                    <span className="color4">Step 1</span>: Fill the form
                    provide the vendor details, attach invoice and send the
                    crypto to the mentioned address along with the screenshot of
                    the transfer and complete the submission.
                    <br />
                    <br />
                    <span className="color4">Step 2</span>: We pay the vendor as
                    per the chosen method of payment and the transfer details
                    will be emailed to you with the necessary receipt for the
                    same.
                    <br />
                    <br />
                    <span className="color4">Step 3</span>: In some cases we
                    tend to ask ID proof of the sender due to compliance
                    requirement. If any such requirements, we will send you an
                    email for further details.
                    <br />
                    <br />
                    <span className="color4">Step 4</span>: If ID is not
                    required we will transfer the funds to the payee within 3 to
                    4 working days.
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

export default PaymentService;
