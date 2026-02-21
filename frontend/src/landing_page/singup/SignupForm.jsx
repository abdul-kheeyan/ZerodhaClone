import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleGetOTP = () => {
    if (phoneNumber.length === 10) {
      console.log("Sending OTP to:", phoneNumber);
      setStep(2);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const verifyOTP = async () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/verify-otp",
        { mobile: phoneNumber, otp }
      );

      // ✅ save token
      localStorage.setItem("token", res.data.token);

      // 🚀 redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid OTP or server error");
    }
  };

  const resendOTP = () => {
    console.log("Resending OTP to:", phoneNumber);
    alert(`OTP resent to +91 ${phoneNumber}`);
  };

  // --- your styles here (keep as is) ---

  return (
    <div>
      {/* your existing signup form JSX here */}
      {/* just make sure button calls verifyOTP */}
    </div>
  );
}
