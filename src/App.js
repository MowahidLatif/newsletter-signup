import React, { useState } from "react";
import Form from "./views/Form";
import SuccessPopup from "./views/SuccessPopUp";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState(""); // State to store email
  const [showSuccess, setShowSuccess] = useState(false);

  // Update the email state when the form is submitted
  const handleSubmit = async (submittedEmail) => {
    setEmail(submittedEmail); // Set the email received from the form
    setShowSuccess(true); // Show the success popup
  };

  const handleClose = () => {
    setShowSuccess(false);
  };

  return (
    <div className="App">
      {showSuccess ? (
        <SuccessPopup email={email} handleClose={handleClose} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
}
