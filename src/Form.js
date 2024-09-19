import axios from "axios";
import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div class="container">
      <div class="card">
        <div class="form-section">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form class="form">
            <input type="email" placeholder="email@company.com" required />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div class="image-section">
          <img src="path-to-image" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Form;
