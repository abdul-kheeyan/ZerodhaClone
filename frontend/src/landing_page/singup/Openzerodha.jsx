import React from 'react';

export default function Openzerodha() {
  const styles = {
    container: {
      minHeight: '50vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textAlign: 'center'
    },
    heading: {
      fontSize: '36px',
      fontWeight: '500',
      color: '#424242',
      marginBottom: '24px'
    },
    description: {
      fontSize: '18px',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '32px',
      maxWidth: '800px'
    },
    button: {
      backgroundColor: '#387ed1',
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: '500',
      padding: '14px 40px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Open a Zerodha account
      </h1>
      
      <p style={styles.description}>
        Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
      </p>

      <button
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#000000'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#387ed1'}
      >
        Signup for free
      </button>
    </div>
  );
}