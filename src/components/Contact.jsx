import React from "react";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="bg_color1 rounded-3">
            <div className="row">
              <div className="col-12 col-md-6 p-md-4 pe-md-0 py-4">
                <h1 className="text-center mb-4 text-white fw600">
                  Contact us
                </h1>
                <div className="row gy-3 px-4">
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Enter Phome Number"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="w-100 form-control"
                      placeholder="Enter message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100 submit">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99580.00554143201!2d-9.160203249999999!3d38.74362659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2s!4v1652262079808!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: "0", borderRadius: "0px 6px 6px 0px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
