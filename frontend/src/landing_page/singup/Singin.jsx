import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function SignupForm() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleGetOTP = () => {
    if (phoneNumber.length === 10) {
      console.log('Sending OTP to:', phoneNumber);
      setStep(2);
    } else {
      alert('Please enter a valid 10-digit mobile number');
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

    // Save JWT token
    localStorage.setItem("token", res.data.token);

    // ✅ Navigate to dashboard
    navigate("/dashboard"); // ya tumhare dashboard ka route
  } catch (err) {
    alert("Invalid OTP or server error");
  }
};


  const resendOTP = () => {
    console.log('Resending OTP to:', phoneNumber);
    alert(`OTP resent to +91 ${phoneNumber}`);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      flexWrap: 'wrap',
      gap: '40px'
    },
    imageContainer: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mainImage: {
      height: '30rem',
      maxWidth: '100%',
      objectFit: 'contain'
    },
    wrapper: {
      width: '100%',
      maxWidth: '448px',
      flex: '1',
      minWidth: '300px'
    },
    heading: {
      fontSize: '36px',
      fontWeight: '500',
      color: '#1f2937',
      marginBottom: '12px'
    },
    subheading: {
      color: '#6b7280',
      fontSize: '18px',
      marginBottom: '32px'
    },
    inputContainer: {
      marginBottom: '24px'
    },
    inputWrapper: {
      display: 'flex',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    countryCode: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      backgroundColor: '#f9fafb',
      borderRight: '1px solid #d1d5db'
    },
    flag: {
      fontSize: '24px'
    },
    code: {
      color: '#374151',
      fontWeight: '500'
    },
    input: {
      flex: '1',
      padding: '12px 16px',
      color: '#374151',
      border: 'none',
      outline: 'none',
      fontSize: '16px'
    },
    otpInput: {
      width: '100%',
      padding: '12px 16px',
      color: '#374151',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      outline: 'none',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      maxWidth: '320px',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      fontWeight: '500',
      padding: '12px 24px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s'
    },
    buttonDisabled: {
      backgroundColor: '#d1d5db',
      cursor: 'not-allowed'
    },
    terms: {
      color: '#4b5563',
      fontSize: '14px',
      marginTop: '24px',
      lineHeight: '1.5'
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none'
    },
    nriText: {
      color: '#4b5563',
      fontSize: '14px',
      marginTop: '24px'
    },
    otpInfo: {
      fontSize: '14px',
      color: '#4b5563',
      marginBottom: '16px'
    },
    changeButton: {
      color: '#2563eb',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline',
      marginLeft: '8px',
      fontSize: '14px'
    },
    resendButton: {
      width: '100%',
      backgroundColor: 'transparent',
      color: '#2563eb',
      fontWeight: '400',
      padding: '8px 24px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'underline',
      marginTop: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="media/images/open.png" alt="mainImg" style={styles.mainImage} />
      </div>

      <div style={styles.wrapper}>
        <h1 style={styles.heading}>
          Signup now
        </h1>
        
        <p style={styles.subheading}>
          Or track your existing application
        </p>

        {step === 1 && (
          <>
            <div style={styles.inputContainer}>
              <div style={styles.inputWrapper}>
                <div style={styles.countryCode}>
                  <span style={styles.flag}>🇮🇳</span>
                  <span style={styles.code}>+91</span>
                </div>
                
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  style={styles.input}
                  maxLength="10"
                />
              </div>
            </div>

            <button
              onClick={handleGetOTP}
              disabled={phoneNumber.length !== 10}
              style={{
                ...styles.button,
                ...(phoneNumber.length !== 10 ? styles.buttonDisabled : {})
              }}
              onMouseEnter={(e) => {
                if (phoneNumber.length === 10) {
                  e.target.style.backgroundColor = '#1d4ed8';
                }
              }}
              onMouseLeave={(e) => {
                if (phoneNumber.length === 10) {
                  e.target.style.backgroundColor = '#2563eb';
                }
              }}
            >
              Get OTP
            </button>

            <p style={styles.terms}>
              By proceeding, you agree to the Zerodha{' '}
              <a href="#" style={styles.link}>
                terms
              </a>
              {' '}&{' '}
              <a href="#" style={styles.link}>
                privacy policy
              </a>
            </p>

            <p style={styles.nriText}>
              Looking to open NRI account?{' '}
              <a href="#" style={styles.link}>
                Click here
              </a>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <div style={styles.otpInfo}>
              Enter the OTP sent to +91 {phoneNumber}
              <button
                onClick={() => setStep(1)}
                style={styles.changeButton}
              >
                Change
              </button>
            </div>

            <div style={styles.inputContainer}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                style={styles.otpInput}
                maxLength="6"
              />
            </div>

            <button
              onClick={verifyOTP}
              disabled={otp.length !== 6}
              style={{
                ...styles.button,
                ...(otp.length !== 6 ? styles.buttonDisabled : {})
              }}
              onMouseEnter={(e) => {
                if (otp.length === 6) {
                  e.target.style.backgroundColor = '#1d4ed8';
                }
              }}
              onMouseLeave={(e) => {
                if (otp.length === 6) {
                  e.target.style.backgroundColor = '#2563eb';
                }
              }}
            >
              Verify OTP
            </button>

            <button
              onClick={resendOTP}
              style={styles.resendButton}
            >
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}