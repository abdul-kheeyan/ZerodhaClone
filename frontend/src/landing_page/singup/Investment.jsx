import React from 'react';

export default function InvestmentOptions() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '60px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      marginBottom: '60px'
    },
    card: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '30px'
    },
    iconWrapper: {
      minWidth: '80px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '85px',
      
    },
    content: {
      flex: 1
    },
    title: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#424242',
      marginBottom: '12px'
    },
    description: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    },
    buttonWrapper: {
      textAlign: 'center',
      marginTop: '40px'
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
      transition: 'background-color 0.2s'
    }
  };

  const investments = [
    {
      id: 1,
      title: 'Stocks',
      description: 'Invest in all exchange-listed securities',
      imgSrc: '/media/images/stocks-acop.png' // Apna image path yahan rakho
    },
    {
      id: 2,
      title: 'Mutual funds',
      description: 'Invest in commission-free direct mutual funds',
      imgSrc: '/media/images/mf-acop.png' // Apna image path yahan rakho
    },
    {
      id: 3,
      title: 'IPO',
      description: 'Apply to the latest IPOs instantly via UPI',
      imgSrc: '/media/images/ipo-acop.png' // Apna image path yahan rakho
    },
    {
      id: 4,
      title: 'Futures & options',
      description: 'Hedge and mitigate market risk through simplified F&O trading',
      imgSrc: '/media/images/fo-acop.png' // Apna image path yahan rakho
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Investment options with Zerodha demat account
      </h1>

      <div style={styles.grid}>
        {investments.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.iconWrapper}>
              <img 
                src={item.imgSrc} 
                alt={item.title}
                style={styles.icon}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

        <div style={styles.buttonWrapper}>
        <button
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#000000'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#387ed1'}
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}