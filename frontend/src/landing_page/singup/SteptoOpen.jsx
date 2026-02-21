import React from 'react';

export default function SteptoOpen() {
  const styles = {
    container: {
      minHeight: '60vh',
      backgroundColor: '#f5f5f5',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    heading: {
      fontSize: '32px',
      fontWeight: '500',
      color: '#424242',
      textAlign: 'center',
      marginBottom: '80px',
      lineHeight: '1.4'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '100px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap'
    },
    imageSection: {
      flex: '1',
      minWidth: '330px',
      maxWidth: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '100%',
      height: 'auto',
      maxWidth: '450px'
    },
    stepsSection: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '500px'
    },
    stepItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '30px',
      marginBottom: '40px'
    },
    stepNumber: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#999',
      minWidth: '40px'
    },
    stepText: {
      fontSize: '22px',
      fontWeight: '400',
      color: '#424242',
      lineHeight: '1.5',
      margin: 0,
      paddingTop: '2px'
    }
  };

  const steps = [
    {
      number: '01',
      text: 'Enter the requested details'
    },
    {
      number: '02',
      text: 'Complete e-sign & verification'
    },
    {
      number: '03',
      text: 'Start investing!'
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Steps to open a demat account with Zerodha
      </h1>

      <div style={styles.content}>
        {/* Image Section */}
        <div style={styles.imageSection}>
          <img 
            src="/media/images/steps-acop.png"
            alt="Account opening steps"
            style={styles.image}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Steps Section */}
        <div style={styles.stepsSection}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepItem}>
              <span style={styles.stepNumber}>{step.number}</span>
              <p style={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}