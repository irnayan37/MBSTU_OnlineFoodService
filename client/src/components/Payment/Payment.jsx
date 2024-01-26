import React, { useState } from "react";
import { getConfirmOrder } from "../../helper/SassionHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IsMobile } from "../../helper/FormHelper";

const Payment = () => {
  const totalPrice = getConfirmOrder().totalPrice;
  const navigate = useNavigate();
  const [bkash, setBkash] = useState("");
  const [pin, setPin] = useState("");

  const handlePayment = async () => {
    // Make a request to your server to initiate the bKash payment
    try {
      if (!IsMobile(bkash)) {
        toast.error("Please  give me correct bkash number");
      } else if (pin.length !== 5) {
        toast.error("Your pin is incorrect");
      } else {
        navigate("/products");
        toast.success("Your payment is successful");
      }
    } catch (error) {
      console.error("Error initiating bKash payment:", error);
    }
  };

  return (
    <div>
      <div className="bkash-payment-container">
        <h1 className="bkash-payment-title">bKash Payment</h1>
        <label htmlFor="amount" className="bkash-payment-label">
          Enter Bkash No:
        </label>
        <input
          type="number"
          id="bkashNumber"
          onChange={(e) => setBkash(e.target.value)}
          className="bkash-payment-input"
        />
        <br />
        <label htmlFor="" className="bkash-payment-label">
          Enter PIN:
        </label>
        <input
          type="password"
          id="pin"
          onChange={(e) => setPin(e.target.value)}
          className="bkash-payment-input"
        />
        <button onClick={handlePayment} className="bkash-payment-btn">
          Payment ৳ {totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
