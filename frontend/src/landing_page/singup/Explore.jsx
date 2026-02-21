import React from 'react';

export default function Explore() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffffff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    heading: {
      fontSize: '32px',
      fontWeight: '500',
      color: '#424242',
      textAlign: 'center',
      marginBottom: '60px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '30px',
      transition: 'box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    iconTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px'
    },
    icon: {
      fontSize: '28px',
      color: '#387ed1'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#424242',
      margin: 0
    },
    cardDescription: {
      fontSize: '15px',
      color: '#666',
      lineHeight: '1.6',
      margin: 0
    }
  };

  const accountTypes = [
    {
      id: 1,
      icon: '👤',
      title: 'Individual Account',
      description: 'Invest in equity, mutual funds and derivatives'
    },
    {
      id: 2,
      icon: '👥',
      title: 'HUF Account',
      description: 'Make tax-efficient investments for your family'
    },
    {
      id: 3,
      icon: '🌐',
      title: 'NRI Account',
      description: 'Invest in equity, mutual funds, debentures, and more'
    },
    {
      id: 4,
      icon: '👶',
      title: 'Minor Account',
      description: 'Teach your little ones about money & invest for their future with them'
    },
    {
      id: 5,
      icon: '🏢',
      title: 'Corporate / LLP/ Partnership',
      description: 'Manage your business surplus and investments easily'
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Explore different account types
      </h1>

      <div style={styles.grid}>
        {accountTypes.map((account) => (
          <div 
            key={account.id} 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.iconTitleWrapper}>
              <span style={styles.icon}>{account.icon}</span>
              <h3 style={styles.cardTitle}>{account.title}</h3>
            </div>
            <p style={styles.cardDescription}>{account.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}