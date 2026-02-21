import { useState } from "react";

function OTPLogin() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOTP = async () => {
    // Simulating API call
    console.log("Sending OTP to:", mobile);
    setStep(2);
  };

  const verifyOTP = async () => {
    // Simulating API call
    console.log("Verifying OTP:", otp);
    alert("OTP verified successfully!");
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 items-center justify-center p-12">
        <div className="max-w-2xl">
          <img 
            src="/openaccount.svg" 
            alt="Trading Platform" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Open a free demat and trading account online
            </h1>
            <p className="text-gray-600">
              Start investing brokerage free and join a community of 1.6+ crore investors and traders
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Signup now
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Or track your existing application
            </p>

            {step === 1 && (
              <div className="space-y-4">
                <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <div className="flex items-center px-4 bg-gray-50 border-r border-gray-300">
                    <span className="text-2xl mr-2">🇮🇳</span>
                    <span className="text-gray-700 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="flex-1 px-4 py-3 outline-none text-gray-700"
                    maxLength="10"
                  />
                </div>

                <button
                  onClick={sendOTP}
                  disabled={mobile.length !== 10}
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Get OTP
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By proceeding, you agree to the Zerodha{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms & privacy policy
                  </a>
                </p>

                <p className="text-sm text-gray-600 text-center mt-6">
                  Looking to open NRI account?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Click here
                  </a>
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Enter the OTP sent to +91 {mobile}
                    <button
                      onClick={() => setStep(1)}
                      className="text-blue-600 hover:underline ml-2"
                    >
                      Change
                    </button>
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  maxLength="6"
                />

                <button
                  onClick={verifyOTP}
                  disabled={otp.length !== 6}
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Verify OTP
                </button>

                <button
                  onClick={sendOTP}
                  className="w-full text-blue-600 py-2 text-sm hover:underline"
                >
                  Resend OTP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPLogin;