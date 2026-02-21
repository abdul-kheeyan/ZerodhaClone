const express = require("express");
const router = express.Router();
const Otp = require("../model/Otp");
const sendOTP = require("../utils/sendOTP");

// Generate OTP
router.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

  try {
    // Save OTP to DB
    const newOtp = new Otp({ mobile, otp });
    await newOtp.save();

    // Send OTP via Fast2SMS
    const smsResponse = await sendOTP(mobile, otp);

    res.json({
      message: "OTP generated and sent (check Fast2SMS after verification)",
      otp: otp, // for testing; remove in production
      smsResponse,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
