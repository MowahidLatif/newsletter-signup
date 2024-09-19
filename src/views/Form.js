import React, { useState } from "react";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";

const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form-section">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src={iconList} alt="Check icon" /> Product discovery and
              building what matters
            </li>
            <li>
              <img src={iconList} alt="Check icon" /> Measuring to ensure
              updates are a success
            </li>
            <li>
              <img src={iconList} alt="Check icon" /> And much more!
            </li>
          </ul>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="image-section">
          <picture>
            <source srcSet={illustrationDesktop} media="(min-width: 768px)" />
            <img src={illustrationMobile} alt="Illustration" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Form;
