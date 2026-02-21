import React from 'react';

export default function Benefits() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '120px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap'
    },
    leftSection: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '450px',
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: 'auto',
      maxWidth: '350px',
      marginBottom: '40px'
    },
    mainHeading: {
      fontSize: '28px',
      fontWeight: '500',
      color: '#424242',
      lineHeight: '1.4',
      margin: 0
    },
    rightSection: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '550px'
    },
    benefitItem: {
      marginBottom: '50px'
    },
    benefitTitle: {
      fontSize: '22px',
      fontWeight: '500',
      color: '#424242',
      marginBottom: '12px'
    },
    benefitDescription: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    }
  };

  const benefits = [
    {
      title: 'Unbeatable pricing',
      description: 'Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.'
    },
    {
      title: 'Best investing experience',
      description: 'Simple and intuitive trading platform with an easy-to-understand user interface.'
    },
    {
      title: 'No spam or gimmicks',
      description: 'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.'
    },
    {
      title: 'The Zerodha universe',
      description: 'More than just an app — gain free access to the entire ecosystem of our partner products.'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          <img 
            src="/media/images/acop-benefits.png"
            alt="Benefits illustration"
            style={styles.image}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h2 style={styles.mainHeading}>
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          {benefits.map((benefit, index) => (
            <div key={index} style={styles.benefitItem}>
              <h3 style={styles.benefitTitle}>{benefit.title}</h3>
              <p style={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}