import React, { useState } from "react";
import axios from "axios";
import Form from "./views/Form";
import SuccessPopup from "./views/SuccessPopUp";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (email) => {
    try {
      const response = await axios.post("/subscribe", { email });
      if (response.status === 200) {
        setEmail(email);
        setShowSuccess(true);
      }
    } catch (error) {
      console.error(
        "An error occurred:",
        error.response?.data?.message || error.message
      );
    }
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
