import React, { useState } from "react";
import "./CSS/DonationForm.css";

const DonationForm = () => {
  // State to manage form inputs
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentOption, setPaymentOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", {
      amount,
      frequency,
      firstName,
      lastName,
      email,
      paymentOption,
    });
  };

  return (
    <div className="donation-form">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>How much would you like to donate?</h2>
          <div className="amount-options">
            {[5, 10, 25, 50, 100, 250].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={amount === option}
                  onChange={() => setAmount(option)}
                />
                {`${option}€`}
              </label>
            ))}
            <label htmlFor="custom-amount">
              <input
                type="radio"
                value=""
                checked={amount === ""}
                onChange={() => setAmount("")}
              />
              Other amount:
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Type other amount"
                id="custom-amount"
              />
            </label>
          </div>
        </div>

        <div className="donation-frequency">
          Frequency:
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="one-time">One time</option>
            <option value="monthly">Monthly</option>
            <option value="two-months">Each two months</option>
            <option value="quarterly">Quarterly</option>
            <option value="semiannual">Semiannual</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <div>
          <div>First name:</div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <div>Last name:</div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <div>Email address:</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <div>Payment options:</div>
          <select
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="direct-deposit">Direct Deposit</option>
            <option value="stripe-paypal">Stripe or PayPal</option>
          </select>
        </div>
        <button type="submit">Donate now</button>
      </form>
    </div>
  );
};

export default DonationForm;
