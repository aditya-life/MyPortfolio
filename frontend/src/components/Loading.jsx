import React from "react";

const Loading = ({ fullscreen = true, size = "4rem" }) => {
  return (
    <div
      className={`w-100 d-flex align-items-center justify-content-center ${
        fullscreen ? "vh-100" : ""
      }`}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
