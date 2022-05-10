import React from "react";

const Upload = ({ children }) => {
  return (
    <div className="upload_container">
      <label
        className="w-100 d-flex align-items-center gap-3 justify-content-center"
        htmlFor="upload"
      >
        <img src="/assets/upload.svg" alt="" />
        <p className="text-white mb-0">{children}</p>
      </label>

      <input type="file" name="upload" id="upload" />
    </div>
  );
};

export default Upload;
