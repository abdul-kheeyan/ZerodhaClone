const axios = require("axios");

const sendOTP = async (mobile, otp) => {
  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "otp",
        sender_id: "FSTSMS",             // use verified sender ID
        message: "Your OTP is {{1}}",
        variables_values: otp.toString(),
        numbers: mobile.toString(),
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("FAST2SMS RESPONSE:", response.data);
    return response.data;
  } catch (error) {
    console.log("FAST2SMS ERROR:", error.response?.data || error.message);
    return null;
  }
};

module.exports = sendOTP;
