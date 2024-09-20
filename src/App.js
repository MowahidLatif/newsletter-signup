import React, { useState } from "react";
import Form from "./views/Form";
import SuccessPopup from "./views/SuccessPopUp";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (submittedEmail) => {
    setEmail(submittedEmail);
    setShowSuccess(true);
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
