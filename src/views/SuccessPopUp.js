import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import "./SuccessPopup.css";

const SuccessPopup = ({ email, handleClose }) => {
  return (
    <div className="success-popup">
      <div className="success-card">
        <div className="icon">
          <img src={iconSuccess} alt="Success checkmark" />
        </div>
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button className="dismiss-button" onClick={handleClose}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
